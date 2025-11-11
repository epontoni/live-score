"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import useSound from "use-sound";
import { socket } from "@/lib/socket";
import { sendPunto, sendGanador } from "@/lib/api";
// import { io } from "socket.io-client";

export interface ScoreState {
  teamA: number;
  teamB: number;
  teamAName: string;
  teamBName: string;
  matchPoint: number;
}

const SCORE_STORAGE_KEY = "score-state";

// const socket = io("http://localhost:3000");

const getInitialState = (): ScoreState => {
  if (typeof window === "undefined") {
    return {
      teamA: 0,
      teamB: 0,
      teamAName: "Team A",
      teamBName: "Team B",
      matchPoint: 10,
    };
  }
  try {
    const item = window.localStorage.getItem(SCORE_STORAGE_KEY);
    return item
      ? JSON.parse(item)
      : {
          teamA: 0,
          teamB: 0,
          teamAName: "Local",
          teamBName: "Visitante",
          matchPoint: 10,
        };
  } catch (error) {
    console.error("Error reading from localStorage", error);
    return {
      teamA: 0,
      teamB: 0,
      teamAName: "Local",
      teamBName: "Visitante",
      matchPoint: 10,
    };
  }
};

export function useScoreStore() {
  const [state, setState] = useState<ScoreState>(getInitialState());
  const [isInitialized, setIsInitialized] = useState(false);
  // public/ files are served from the web root — use an absolute path
  const [playScore] = useSound("/sounds/score.mp3", { volume: 1 });
  const [playWin] = useSound("/sounds/win.mp3", { volume: 1 });

  useEffect(() => {
    setState(getInitialState());
    setIsInitialized(true);

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === SCORE_STORAGE_KEY && event.newValue) {
        try {
          setState(JSON.parse(event.newValue));
        } catch (error) {
          console.error("Error parsing new state from localStorage", error);
        }
      }
    };

    // Escuchar cambios de otras pestañas
    window.addEventListener("storage", handleStorageChange);

    // Escuchar actualizaciones del servidor de socket.io
    socket.on("scoreUpdate", (newState: ScoreState) => {
      // Sincroniza el estado local sin volver a emitir
      const updatedState = { ...state, ...newState };
      setState(updatedState);
      try {
        window.localStorage.setItem(
          SCORE_STORAGE_KEY,
          JSON.stringify(updatedState)
        );
      } catch (error) {
        console.error("Error writing to localStorage", error);
      }
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      socket.off("scoreUpdate");
    };
  }, []);

  const updateState = (newState: Partial<ScoreState>) => {
    const updatedState = { ...state, ...newState };
    setState(updatedState);
    try {
      window.localStorage.setItem(
        SCORE_STORAGE_KEY,
        JSON.stringify(updatedState)
      );

      // =======================================================================
      // SOCKET.IO: Emitir evento al servidor
      // Cada vez que el estado cambie, esta función será llamada.
      //
      // Ejemplo:
      socket.emit("score:change", updatedState);
      // =======================================================================
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  };

  const winner = useMemo(() => {
    const calculatedWinner =
      state.teamA >= state.matchPoint
        ? state.teamAName
        : state.teamB >= state.matchPoint
        ? state.teamBName
        : null;

    if (calculatedWinner) {
      // =======================================================================
      // SOCKET.IO: Notificar que alguien ha ganado.
      // El memo se recalcula cada vez que las puntuaciones cambian.
      //
      // Ejemplo:
      socket.emit("score:max", { winner: calculatedWinner });
      // =======================================================================
    }

    return calculatedWinner;
  }, [
    state.teamA,
    state.teamB,
    state.matchPoint,
    state.teamAName,
    state.teamBName,
  ]);

  // Play win sound when a winner is detected
  useEffect(() => {
    if (winner) {
      try {
        playWin();
      } catch (err) {
        // Log but don't break app if audio fails
        console.warn("Failed to play win sound", err);
      }
    }
  }, [winner, playWin]);

  const incrementTeamA = useCallback(() => {
    if (winner) return;
    updateState({ teamA: state.teamA + 1 });
    playScore();
  }, [playScore, winner, state.teamA, state]);

  const incrementTeamB = useCallback(() => {
    if (winner) return;
    updateState({ teamB: state.teamB + 1 });
    playScore();
  }, [playScore, winner, state.teamB, state]);

  const decrementTeamA = useCallback(() => {
    updateState({ teamA: Math.max(0, state.teamA - 1) });
  }, [state.teamA, state]);

  const decrementTeamB = useCallback(() => {
    updateState({ teamB: Math.max(0, state.teamB - 1) });
  }, [state.teamB, state]);

  const resetScores = useCallback(() => {
    updateState({ teamA: 0, teamB: 0 });
  }, [state]);

  const setTeamAName = useCallback(
    (name: string) => {
      updateState({ teamAName: name });
    },
    [state]
  );

  const setTeamBName = useCallback(
    (name: string) => {
      updateState({ teamBName: name });
    },
    [state]
  );

  const setMatchPoint = useCallback(
    (points: number) => {
      updateState({ matchPoint: points });
    },
    [state]
  );

  const isMatchPoint =
    (state.teamA === state.matchPoint - 1 &&
      state.teamB < state.matchPoint - 1) ||
    (state.teamB === state.matchPoint - 1 &&
      state.teamA < state.matchPoint - 1) ||
    (state.teamA >= state.matchPoint - 1 &&
      state.teamB >= state.matchPoint - 1 &&
      state.teamA === state.teamB);

  return {
    ...state,
    isInitialized,
    incrementTeamA,
    incrementTeamB,
    decrementTeamA,
    decrementTeamB,
    resetScores,
    setTeamAName,
    setTeamBName,
    setMatchPoint,
    isMatchPoint,
    winner,
  };
}

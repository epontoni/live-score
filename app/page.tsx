"use client";

import { ScoreOverlay } from "@/components/score-overlay";
import { WebcamStream } from "@/components/webcam-stream";
import { useScoreStore } from "@/hooks/use-score-store";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Home() {
  const { winner, isInitialized } = useScoreStore();
  const { width, height } = useWindowSize();

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {isInitialized && winner && (
        <ReactConfetti width={width} height={height} />
      )}
      <WebcamStream />
      <ScoreOverlay />
    </main>
  );
}

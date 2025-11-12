"use client";

import { useScoreStore } from "@/hooks/use-score-store";
// import { IpetymLogo } from "@/components/icons";
import Image from "next/image";
import IpetymLogo from "@/public/IPETyM 256.png";
import Link from "next/link";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

export function ScoreOverlay() {
  const {
    teamA,
    teamB,
    teamAName,
    teamBName,
    isMatchPoint,
    winner,
    isInitialized,
  } = useScoreStore();

  const scoreClass =
    "text-8xl md:text-9xl font-bold font-headline tracking-tighter text-white [text-shadow:_0_4px_8px_rgb(0_0_0_/_50%)]";
  const teamNameClass =
    "text-2xl md:text-3xl font-bold font-headline uppercase text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]";

  if (!isInitialized) {
    return null;
  }

  const scoreVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  };

  return (
    <div className="relative w-full h-full text-white pointer-events-none">
      <div className="absolute top-8 left-8 text-center">
        <p className={teamNameClass}>{teamAName}</p>
        <div className="relative h-32">
          <AnimatePresence mode="popLayout">
            <motion.p
              key={teamA}
              variants={scoreVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={scoreClass}
            >
              {teamA}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute top-8 right-8 text-center">
        <p className={teamNameClass}>{teamBName}</p>
        <div className="relative h-32">
          <AnimatePresence mode="popLayout">
            <motion.p
              key={teamB}
              variants={scoreVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={scoreClass}
            >
              {teamB}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {winner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/50 backdrop-blur-sm p-4 md:p-8 rounded-lg shadow-2xl"
          >
            <p className="text-4xl md:text-6xl font-bold font-headline text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)] text-center">
              ¡GANADOR!
            </p>
            <p className="text-2xl md:text-4xl font-headline text-white/90 text-center mt-2">
              {winner}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMatchPoint && !winner && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/50 backdrop-blur-sm p-4 md:p-8 rounded-lg shadow-2xl"
          >
            <p className="text-4xl md:text-6xl font-bold font-headline text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)] animate-pulse">
              ¡MATCH POINT!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {/* <IpetymLogo className="h-24 w-24 text-white opacity-90" /> */}
        <div className="border-r-2 pr-4">
          <span className="text-yellow-300">Feria</span>
          <br />
          <span className="uppercase font-bold">Lúdica</span>
        </div>

        <div className="flex gap-2 items-center">
          <Image src={IpetymLogo} alt="IPETyM Logo" className="h-auto w-20" />
          <div className="font-headline text-sm text-white opacity-80 [text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)] text-left max-w-xs">
            <p className="font-bold text-2xl">IPETyM 256</p>
            <p className="text-md">
              "General Libertador Don José de San Martín"
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 pointer-events-auto">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 hover:text-white rounded-full h-12 w-12"
        >
          <Link href="/puntaje" target="_blank" rel="noopener noreferrer">
            <Settings className="h-6 w-6" />
            <span className="sr-only">Configuración de Puntaje</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

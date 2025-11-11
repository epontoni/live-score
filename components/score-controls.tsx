"use client";

import { useScoreStore } from "@/hooks/use-score-store";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus, RefreshCw } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function ScoreControls() {
  const {
    teamA,
    teamB,
    teamAName,
    teamBName,
    matchPoint,
    incrementTeamA,
    incrementTeamB,
    decrementTeamA,
    decrementTeamB,
    resetScores,
    setTeamAName,
    setTeamBName,
    setMatchPoint,
    isInitialized,
  } = useScoreStore();

  if (!isInitialized) {
    // You can render a skeleton loader here for better UX
    return (
      <div className="flex justify-center items-center h-full pt-20">
        <p>Cargando controles de puntaje...</p>
      </div>
    );
  }

  const handleSetMatchPoint = (e: React.ChangeEvent<HTMLInputElement>) => {
    const points = parseInt(e.target.value, 10);
    if (!isNaN(points) && points > 0) {
      setMatchPoint(points);
    } else if (e.target.value === "") {
      setMatchPoint(1); // Reset to a default if cleared
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">
          Controles de Puntaje
        </CardTitle>
        <CardDescription>
          Gestiona el puntaje y la configuración del juego aquí.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team A Controls */}
          <div className="space-y-4">
            <Label htmlFor="teamAName" className="font-headline">
              Equipo Local
            </Label>
            <Input
              id="teamAName"
              value={teamAName}
              onChange={(e) => setTeamAName(e.target.value)}
              className="font-headline"
            />
            <div className="flex items-center justify-between p-4 border rounded-lg bg-background">
              <span className="font-headline text-5xl font-bold">{teamA}</span>
              <div className="flex gap-2">
                <Button
                  onClick={decrementTeamA}
                  size="icon"
                  aria-label={`Decrementar puntaje de ${teamAName}`}
                  variant="outline"
                  className="bg-red-400 cursor-pointer"
                >
                  <Minus className="h-5 w-5" />
                </Button>
                <Button
                  onClick={incrementTeamA}
                  size="icon"
                  aria-label={`Incrementar puntaje de ${teamAName}`}
                  variant="outline"
                  className="bg-green-400 cursor-pointer"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Team B Controls */}
          <div className="space-y-4">
            <Label htmlFor="teamBName" className="font-headline">
              Equipo Visitante
            </Label>
            <Input
              id="teamBName"
              value={teamBName}
              onChange={(e) => setTeamBName(e.target.value)}
              className="font-headline"
            />
            <div className="flex items-center justify-between p-4 border rounded-lg bg-background">
              <span className="font-headline text-5xl font-bold">{teamB}</span>
              <div className="flex gap-2">
                <Button
                  onClick={decrementTeamB}
                  size="icon"
                  aria-label={`Decrementar puntaje de ${teamBName}`}
                  variant="outline"
                  className="bg-red-400 cursor-pointer"
                >
                  <Minus className="h-5 w-5" />
                </Button>
                <Button
                  onClick={incrementTeamB}
                  size="icon"
                  aria-label={`Incrementar puntaje de ${teamBName}`}
                  variant="outline"
                  className="bg-green-400 cursor-pointer"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="matchPoint" className="font-headline">
              Punto de Partido
            </Label>
            <Input
              id="matchPoint"
              type="number"
              value={matchPoint}
              onChange={handleSetMatchPoint}
              className="w-48"
              min="1"
            />
            <p className="text-sm text-muted-foreground">
              El puntaje necesario para ganar. Un banner de "¡Match Point!"
              aparecerá en pantalla.
            </p>
          </div>

          <Button
            onClick={resetScores}
            variant="destructive"
            className="bg-red-600 cursor-pointer"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Reiniciar Puntajes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

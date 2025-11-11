import { ScoreControls } from "@/components/score-controls";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PuntajePage() {
  return (
    <div className="min-h-screen w-full p-4 sm:p-8">
      <header className="mb-8">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la Cámara
          </Link>
        </Button>
      </header>
      <main>
        <ScoreControls />
      </main>
    </div>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export function WebcamStream() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    let stream: MediaStream | null = null;
    async function getWebcam() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error al acceder a la cámara web:", err);
        toast({
          title: "Error de Cámara Web",
          description:
            "No se pudo acceder a la cámara web. Por favor, verifica los permisos y vuelve a intentarlo.",
          variant: "destructive",
        });
      }
    }

    getWebcam();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [toast]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted
      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    />
  );
}

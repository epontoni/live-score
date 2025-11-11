"use client";

import { io } from "socket.io-client";

// Asegúrate de que la URL apunte a tu servidor de Socket.IO.
// Si estás en desarrollo, podría ser 'http://localhost:3001' o el puerto que hayas configurado.
// En producción, será la URL de tu servidor desplegado.
const URL = process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3000";

export const socket = io(URL, {
  autoConnect: true,
});

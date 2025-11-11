const BASE = "http://localhost:3000";

export async function sendPunto() {
  await fetch(`${BASE}/punto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}

export async function sendGanador() {
  await fetch(`${BASE}/ganador`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}

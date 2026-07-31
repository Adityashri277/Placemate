// frontend/src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "../lib/api";

interface HealthStatus {
  status: string;
  service: string;
}

export default function Home() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch backend status on mount
    apiFetch<HealthStatus>("/api/v1/health")
      .then((data) => {
        setHealth(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Backend Connection Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold text-blue-400">Placemate Platform</h1>
      <p className="mt-4 text-slate-300">Personalized Placement Advisor</p>

      <div className="mt-8 p-6 bg-slate-800 rounded-lg border border-slate-700">
        <h2 className="text-xl font-semibold mb-2">Backend Health Status</h2>
        {loading ? (
          <p className="text-yellow-400">Connecting to FastAPI server...</p>
        ) : health ? (
          <div>
            <p className="text-green-400">Status: {health.status}</p>
            <p className="text-slate-400">Service: {health.service}</p>
          </div>
        ) : (
          <p className="text-red-400">Unable to reach FastAPI server.</p>
        )}
      </div>
    </main>
  );
}
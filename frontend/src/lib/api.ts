// frontend/src/lib/api.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

/**
 * Generic fetch wrapper to execute API calls to FastAPI
 */
export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Request Failed: ${response.statusText}`);
  }

  return response.json();
}
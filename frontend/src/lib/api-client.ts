// Central fetch wrapper for the FastAPI backend.
//
// Every module's data-fetching hook should go through `apiFetch` rather than
// calling `fetch` directly. That way, once JK's API Gateway is live, only
// this file needs the real base URL / auth handling — components never
// change.

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

export class ApiRequestError extends Error {
  status: number;
  detail: string;
  fieldErrors?: Record<string, string>;

  constructor(status: number, detail: string, fieldErrors?: Record<string, string>) {
    super(detail);
    this.status = status;
    this.detail = detail;
    this.fieldErrors = fieldErrors;
  }
}

interface ApiFetchOptions extends RequestInit {
  json?: unknown;
}

export async function apiFetch<T>(
  path: string,
  options: ApiFetchOptions = {}
): Promise<T> {
  const { json, headers, ...rest } = options;

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      ...(json ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
    body: json ? JSON.stringify(json) : rest.body,
    // FastAPI will set the session as an httpOnly cookie; this ensures
    // the browser sends/receives it on cross-origin dev setups too.
    credentials: "include",
  });

  if (!res.ok) {
    let detail = `Request failed with status ${res.status}`;
    let fieldErrors: Record<string, string> | undefined;
    try {
      const body = await res.json();
      detail = body.detail ?? detail;
      fieldErrors = body.field_errors;
    } catch {
      // response wasn't JSON — fall back to the generic message above
    }
    throw new ApiRequestError(res.status, detail, fieldErrors);
  }

  // 204 No Content, etc.
  if (res.status === 204) return undefined as T;

  return res.json() as Promise<T>;
}

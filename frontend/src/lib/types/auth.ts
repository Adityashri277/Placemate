// Mirrors the Pydantic request/response models JK's Auth & Security
// Controller will expose. Keep this file in sync with the backend contract
// once it's finalized (see spec §5 "Contract Agreements").

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  full_name: string;
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  full_name: string;
  email: string;
  created_at: string;
}

export interface AuthResponse {
  user: AuthUser;
  // JWT is expected to be set as an httpOnly cookie by FastAPI directly,
  // so it is intentionally NOT returned in the JSON body.
}

export interface ApiError {
  detail: string;
  field_errors?: Record<string, string>;
}

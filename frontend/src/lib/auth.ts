import { apiFetch } from "./api-client";
import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "./types/auth";

// Use the real FastAPI backend
const USE_MOCK = false;

function mockDelay<T>(value: T, ms = 700): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function login(
  payload: LoginPayload
): Promise<AuthResponse> {
  if (USE_MOCK) {
    if (!payload.email.includes("@")) {
      throw Object.assign(
        new Error("Enter a valid email address."),
        {
          fieldErrors: {
            email: "Enter a valid email address.",
          },
        }
      );
    }

    if (payload.password.length < 6) {
      throw Object.assign(
        new Error("Incorrect email or password."),
        {
          fieldErrors: {
            password: "Incorrect email or password.",
          },
        }
      );
    }

    return mockDelay({
      user: {
        id: "usr_mock_1",
        full_name: "Aditya Sharma",
        email: payload.email,
        created_at: new Date().toISOString(),
      },
    });
  }

  return apiFetch<AuthResponse>("/auth/login", {
    method: "POST",
    json: payload,
  });
}

export async function register(
  payload: RegisterPayload
): Promise<AuthResponse> {
  if (USE_MOCK) {
    return mockDelay({
      user: {
        id: "usr_mock_new",
        full_name: payload.full_name,
        email: payload.email,
        created_at: new Date().toISOString(),
      },
    });
  }

  return apiFetch<AuthResponse>("/auth/register", {
    method: "POST",
    json: payload,
  });
}
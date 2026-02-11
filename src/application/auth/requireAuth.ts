import { UnauthorizedError } from "../../domain/auth/AuthErrors";
import { AuthUser } from "../../domain/auth/AuthUser";

export function requireAuth(token?: string): AuthUser {
  if (token === "valid-token") {
    return { id: "user-1", email: "user@example.com" };
  }
  throw new UnauthorizedError();
}

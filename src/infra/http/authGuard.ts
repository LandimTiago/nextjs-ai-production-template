import { requireAuth } from "../../application/auth/requireAuth";
import { UnauthorizedError } from "../../domain/auth/AuthErrors";
import { AuthUser } from "../../domain/auth/AuthUser";

export async function authGuard(token?: string): Promise<AuthUser | null> {
  try {
    return requireAuth(token);
  } catch (err) {
    if (err instanceof UnauthorizedError) return null;
    throw err;
  }
}

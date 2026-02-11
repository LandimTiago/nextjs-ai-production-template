import { describe, expect, it } from "vitest";
import { UnauthorizedError } from "../../domain/auth/AuthErrors";
import { requireAuth } from "./requireAuth";

describe("requireAuth", () => {
  it("returns user for valid token", () => {
    const user = requireAuth("valid-token");
    expect(user).toEqual({ id: "user-1", email: "user@example.com" });
  });

  it("throws UnauthorizedError for invalid or missing token", () => {
    expect(() => requireAuth("bad-token")).toThrow(UnauthorizedError);
    expect(() => requireAuth(undefined)).toThrow(UnauthorizedError);
  });
});

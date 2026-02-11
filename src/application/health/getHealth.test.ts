import { describe, it, expect } from "vitest";
import { getHealth } from "./getHealth";

describe("getHealth", () => {
  it("returns ok with deterministic timestamp", () => {
    const fixed = new Date("2026-02-10T12:00:00.000Z");

    const r = getHealth({
      now: () => fixed,
      serviceName: "portal",
      version: "1.0.0",
    });

    expect(r.status).toBe("ok");
    expect(r.service).toBe("portal");
    expect(r.version).toBe("1.0.0");
    expect(r.timestamp).toBe("2026-02-10T12:00:00.000Z");
  });
});

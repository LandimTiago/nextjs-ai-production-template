import type { HealthResult } from "@/src/domain/health/health";

type GetHealthDeps = {
  now: () => Date;
  serviceName: string;
  version?: string;
};

export function getHealth(deps: GetHealthDeps): HealthResult {
  const ts = deps.now().toISOString();

  return {
    status: "ok",
    service: deps.serviceName,
    version: deps.version,
    timestamp: ts,
  };
}

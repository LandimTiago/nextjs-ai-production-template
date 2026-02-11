export type HealthStatus = "ok" | "degraded";

export type HealthResult = {
  status: HealthStatus;
  service: string;
  version?: string;
  timestamp: string; // ISO
};

import { NextResponse } from "next/server";
import { getHealth } from "@/src/application/health/getHealth";

export const runtime = "nodejs";

export function GET() {
  const result = getHealth({
    now: () => new Date(),
    serviceName: "portal",
    version: process.env.APP_VERSION,
  });

  return NextResponse.json(result, { status: 200 });
}

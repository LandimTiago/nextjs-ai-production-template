import { NextResponse } from 'next/server'

export async function GET() {
  const payload = {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  }

  return NextResponse.json(payload)
}

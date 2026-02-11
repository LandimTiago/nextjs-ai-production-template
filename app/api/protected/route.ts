export async function GET(request: Request) {
  const token = request.headers.get("authorization") ?? undefined;
  const { authGuard } = await import("../../../src/infra/http/authGuard");
  const user = await authGuard(token);

  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

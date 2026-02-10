# Frontend / Next.js Instructions

- Prefer Server Components by default. Use "use client" only when needed.
- Keep client components leaf-most.
- Avoid mixing data fetching logic into presentational components.
- Treat routes as contracts: document params, searchParams, and response shapes.
- When introducing caching/revalidation, explain tradeoffs and failure modes.

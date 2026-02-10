# Backend-equivalent rules (apply even inside Next.js)

- Routes/handlers must be thin: validate input, call a use-case, map result to UI/HTTP.
- Use-cases return typed errors; mapping to UI status/messages happens at the boundary.
- Side effects go through ports/adapters. No direct IO in domain.
- Any schema/persistence change needs rollback strategy.

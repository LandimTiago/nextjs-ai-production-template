# Repository AI Instructions (always-on)

## Non-negotiables
- Do NOT change external contracts silently (routes, public types, env vars, payload shapes).
- Do NOT introduce broad refactors. Prefer minimal, staged diffs.
- Every change must include: risks, validation steps, and rollback notes (when applicable).
- Never log secrets/PII. Never weaken authz. Deny by default.

## Architecture (production-like)
- Keep boundaries explicit:
  - app/ = web entrypoints (routes, UI composition)
  - src/domain = business rules (framework-agnostic)
  - src/application = use-cases (orchestration)
  - src/infra = IO (db/http/queue) and adapters
- Domain must not import Next/React or infra libraries.
- Map DTO <-> Domain at boundaries.

## Output format for responses
Return in this order:
1) Proposed change (what + where)
2) Risks / Blast radius
3) Validation plan (commands + scenarios)
4) Rollback / mitigation
5) Assumptions (if any)
6) Commit message (if applicable | english) in the format: type(scope): description

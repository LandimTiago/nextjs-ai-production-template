# AI Skills (routines)

## Skill: Risk-oriented review
Output:
- Top risks (ordered)
- Contracts affected
- Missing tests
- Attack/threat angle

Checklist:
- contracts (routes/types/env)
- authz/PII/secrets
- caching/revalidation surprises
- concurrency/race
- error handling + retries/timeouts
- observability

## Skill: Safe refactor (no contract break)
- Identify contracts
- Add characterization tests
- Refactor in small diffs
- Validate
- Remove dead code last

## Skill: Change impact analysis
- Modules touched + why
- Dependencies + side effects
- Rollout plan (flag/canary if relevant)
- Rollback plan

## Skill: ADR (short)
- Context
- Decision
- Alternatives
- Consequences
- Validation

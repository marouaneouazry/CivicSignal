# Contributing to CivicSignal

## Development workflow

1. Coordinate in an issue or draft pull request. State the component, expected behavior and any shared contracts, schema changes or infrastructure files involved.
2. Start from the latest `origin/main`. Create a short-lived branch such as `feat/report-photo-validation`, `fix/postgres-bootstrap`, `docs/quick-start` or `chore/frontend-dependencies`. Codex branches may use a `codex/` prefix followed by the same descriptive naming.
3. Keep each change focused. Coordinate changes to the Gateway, shared Angular library, database schema or event contracts with the developers who own the affected components before editing those files.
4. Commit with [Conventional Commits](https://www.conventionalcommits.org/), for example `feat(report): validate photo uploads` or `docs(setup): clarify MinIO build requirements`. Use `fix`, `test`, `refactor`, `docs`, `build` or `chore` for the appropriate change.
5. Push your branch and open a pull request against `main`. Describe the purpose, relevant specification, checks run, and any limitations. Include screenshots for UI changes and migration or compatibility notes for schema and contract changes.
6. Ask a teammate to review before merging. Resolve conflicts by preserving the intended behavior from both branches. Coordinate shared-branch updates with collaborators and avoid rewriting shared history.

## Code quality

- Keep Java services independently buildable. Run the Maven wrapper from each affected service directory. Keep API DTOs separate from persistence entities and preserve per-service data ownership.
- Keep Angular components standalone, UI text in French and fixture data under the shared library's `mock/` directory. Build the workspace with `npm run build` and run `npm test -- shared --watch=false`. Check affected routes and responsive layouts.
- Keep AI serving and training separate. Run the health smoke test with `python -m unittest discover -s tests` against a running FastAPI instance. Use `AI_TEST_URL` to select a different address.
- Validate Compose changes with `docker compose config --quiet`. Verify startup and affected health checks with an existing local environment. Preserve named volumes and coordinate any changes to persistent data.
- Commit dependency locks and wrapper files alongside changes to their dependencies. Keep credentials, local configuration, generated artifacts, data and trained models outside Git.
- Describe actual checks in the pull request. Record any skipped or blocked verification.

See the [README](README.md) for local setup, [AGENTS.md](AGENTS.md) for architecture constraints and the [project specifications](docs/) for requirements.

# CivicSignal agent instructions

## Scope and sources

Apply these instructions throughout the repository. The [UML and architecture document v2.1](docs/CivicSignal_Conception_UML_Architecture_PFA_EMSI.pdf) governs the architecture, endpoints and data ownership. The [cahier des charges v2.0](docs/CivicSignal_Cahier_des_charges_PFA_EMSI%20%281%29.pdf) supplies functional context. Apply v2.1 when they disagree. Preserve both original PDFs and use [PROGRESS.md](docs/PROGRESS.md) to distinguish verified behavior from planned work.

| Directory | Responsibility |
| --- | --- |
| `backend/eureka-server`, `backend/api-gateway` | Java service discovery and public API routing |
| `backend/{auth,report,workflow,notification}-service` | Independent Java 21 Maven services and service-owned data |
| `frontend/projects/{portal,dashboard,shared}` | Angular citizen UI, municipal UI and shared types, theme and fixtures |
| `ai-service/app`, `ai-service/training` | FastAPI serving and offline model development |
| `infrastructure/` | Local PostgreSQL bootstrap and MinIO image build |

## Architecture and conventions

- Expose browser API contracts through the Gateway under `/api`. Register Java services with Eureka. Keep FastAPI outside Eureka.
- Auth owns accounts and roles. Report owns report content, attachments, and PostGIS queries. Workflow owns status, priority, assignment and analysis decisions. Notification owns notification records and preferences.
- Use one database and dedicated credentials per business service. Keep migrations in the owning service and use APIs or events across service boundaries.
- Follow v2.1 for future RabbitMQ events and retries. Clearly label pending features and demonstration behavior. Keep fixtures out of future API adapters and production data.
- Use standalone Angular components, Material, SCSS and French copy. Share components and tokens where they serve both apps. Preserve useful UI loading, empty and error states.
- Keep model training outside the serving app. Record dataset provenance, split definitions and model versions when training is added.
- Protect `.env`, credentials and local volumes. Keep actual data and model artifacts out of Git. Preserve dependency locks, Maven wrappers and infrastructure scripts.

## Coordination and verification

- Inspect Git status and existing edits before writing. Preserve other developers' changes and keep task scope focused.
- Follow [CONTRIBUTING.md](CONTRIBUTING.md). Work on a dedicated branch for subsequent changes. Coordinate shared files, route contracts, schemas and event formats before changing them.
- Keep persistence and contract changes compatible across services and coordinate release order when a breaking change is approved.
- Run the relevant Maven, Angular, Python or Compose checks and report outcomes. Update documentation when a change affects setup, routes or verification. Commit or push only when requested.

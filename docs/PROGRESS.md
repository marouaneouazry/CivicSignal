# CivicSignal development progress

**Snapshot for November 24, 2026.** This is the project foundation for the November 26 supervisor demonstration. The MVP is in development.

## Completed components

| Component | Implemented and verified |
| --- | --- |
| Angular citizen portal | French landing, account forms, report form, photo preview, map location selection and sample tracking page |
| Angular municipal dashboard | Overview, mock KPIs and charts, report filtering and detail views with an analysis preview |
| Shared Angular library | Report types, status presentation, demonstration fixtures and shared SCSS theme |
| Eureka Server | Registry running on port 8761 |
| API Gateway | Running on port 8080 with configured service routes under `/api` |
| Java business services | Auth 8081, Report 8082, Workflow 8083, Notification 8084. Each has its own Maven project, datasource, Actuator and OpenAPI configuration. |
| FastAPI | AI service skeleton, `GET /ai/health`, API docs and an HTTP smoke test |

The reported development runtime had five Eureka clients registered as **UP**. They were the Gateway and the four business services. Registration verifies discovery. Business operations and integrated API responses are pending.

## Infrastructure verification

- Docker Compose started PostgreSQL, RabbitMQ and MinIO on Docker Desktop with WSL2. All three containers reported healthy.
- PostgreSQL 17.12 and PostGIS 3.7.0 were verified. Each dedicated owner authenticated over TCP to its own database and was denied access to the other three. The verified databases were `auth_db`, `report_db`, `workflow_db` and `notification_db`. PostGIS was confirmed in `report_db`.
- RabbitMQ 4.2.9 accepted connections on the AMQP port. Its management UI and authenticated HTTP API responded.
- MinIO `RELEASE.2025-10-15T17-29-55Z` was built from the pinned upstream revision. Its readiness endpoint, console and signed S3 bucket listing responded.
- Compose holds database, messaging and object storage state in local named volumes. The MinIO source build requires internet access on a fresh setup.

## Build and test results

- Angular production builds and the shared status test passed. Edge smoke checks covered all eight pages, report filtering, image preview, map position selection and 375 px layouts.
- Maven's test phase compiled all six Java projects with Java 21. Java test cases and end-to-end API tests are pending.
- FastAPI returned HTTP 200 with the expected health payload on the isolated smoke-test port 18087. The documented default development port is 8000.
- The Angular build emits warnings for Leaflet's module format and the deprecated shared library builder. Online OpenStreetMap tiles require network access. The map selection smoke test used unavailable tiles to cover the fallback.

## Pending features

Authentication and role enforcement, persistent report submission, migrations, municipal workflow rules, notifications, RabbitMQ publishing and consumers, frontend API integration, AI training and inference remain to be implemented. The current accounts, reports, metrics and AI labels are demonstration interactions or fixtures.

## Next priorities

1. Agree on v2.1 API contracts and migration ownership. Implement authentication and role enforcement.
2. Deliver one end-to-end report flow from the portal through the Gateway to Report Service and MinIO. Add integration coverage.
3. Implement workflow transitions and event publication, then integrate the municipal UI and notification delivery.
4. Curate evaluation data and train baseline image and severity models. Add duplicate detection after comparing models and tuning thresholds with reviewed examples.

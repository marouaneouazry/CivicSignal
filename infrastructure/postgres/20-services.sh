#!/usr/bin/env bash
set -euo pipefail

create_service_database() {
  local database="$1" username="$2" password="$3"
  psql -X -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname postgres \
    -v database="$database" -v username="$username" -v password="$password" <<'SQL'
CREATE ROLE :"username" LOGIN PASSWORD :'password';
CREATE DATABASE :"database" OWNER :"username" TEMPLATE template0;
REVOKE CONNECT, TEMPORARY ON DATABASE :"database" FROM PUBLIC;
SQL
}

create_service_database auth_db "$AUTH_DB_USER" "$AUTH_DB_PASSWORD"
create_service_database report_db "$REPORT_DB_USER" "$REPORT_DB_PASSWORD"
create_service_database workflow_db "$WORKFLOW_DB_USER" "$WORKFLOW_DB_PASSWORD"
create_service_database notification_db "$NOTIFICATION_DB_USER" "$NOTIFICATION_DB_PASSWORD"

psql -X -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname report_db <<'SQL'
CREATE EXTENSION IF NOT EXISTS postgis;
SQL

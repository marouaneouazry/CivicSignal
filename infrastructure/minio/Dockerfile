FROM golang:1.26.4-alpine3.23 AS build

WORKDIR /src
RUN apk add --no-cache git \
    && git clone --depth 1 --branch RELEASE.2025-10-15T17-29-55Z https://github.com/minio/minio.git . \
    && test "$(git rev-parse HEAD)" = 9e49d5e7a648f00e26f2246f4dc28e6b07f8c84a

RUN set -eu; \
    flags="$(MINIO_RELEASE=RELEASE go run buildscripts/gen-ldflags.go 2025-10-15T17:29:55Z)"; \
    CGO_ENABLED=0 go build -mod=readonly -trimpath -tags kqueue -ldflags "$flags" -o /out/minio .

FROM alpine:3.23.4

RUN apk add --no-cache ca-certificates curl
COPY --from=build /out/minio /usr/local/bin/minio
COPY --from=build /src/LICENSE /usr/share/licenses/minio/LICENSE

ENTRYPOINT ["/usr/local/bin/minio"]

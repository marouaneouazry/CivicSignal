from fastapi import FastAPI

app = FastAPI(title="CivicSignal AI", version="0.1.0")


@app.get("/ai/health", tags=["health"])
def health() -> dict[str, str]:
    return {"status": "ok", "service": "ai-service"}

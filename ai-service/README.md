# AI Service

Run from this directory with Python 3.12.

```powershell
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --port 8000
```

The foundation provides `GET /ai/health` and FastAPI documentation at `/docs`. Run `python -m unittest discover -s tests` with the server running.

## Planned training pipeline

1. Audit image rights and annotation quality. Harmonize categories and define a four-level severity rubric.
2. Group related reports before splitting into train, validation and test sets. Apply augmentation to the training split.
3. Fine-tune ResNet50 and EfficientNet with PyTorch on matching splits. Compare macro F1, per-class recall and inference latency. Train and evaluate severity prediction using images, descriptions and context.
4. Evaluate duplicate detection using image and text embeddings, spatial proximity from Report Service and time windows. Tune thresholds on validation data. Municipal staff review duplicate candidates.
5. Version weights, labels and preprocessing together. Integrate MinIO artifacts and RabbitMQ events after model evaluation.

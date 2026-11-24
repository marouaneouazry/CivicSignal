import json
import os
import unittest
from urllib.request import urlopen


class HealthTest(unittest.TestCase):
    def test_health(self):
        base_url = os.environ.get("AI_TEST_URL", "http://127.0.0.1:8000")
        with urlopen(f"{base_url}/ai/health", timeout=5) as response:
            self.assertEqual(response.status, 200)
            self.assertEqual(json.load(response), {"status": "ok", "service": "ai-service"})

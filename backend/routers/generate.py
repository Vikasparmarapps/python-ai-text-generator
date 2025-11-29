from fastapi import APIRouter
import requests
from config import GEMINI_API_KEY

router = APIRouter()

# Correct latest Google Gemini endpoint
GEMINI_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent"

@router.post("/generate")
def generate_content(data: dict):
    try:
        prompt = data.get("prompt", "")
        print(f"Received prompt: {prompt}")
        print(f"API Key length: {len(GEMINI_API_KEY) if GEMINI_API_KEY else 0}")

        if not GEMINI_API_KEY:
            return {"output": "❌ Error: Gemini API key not found in server"}

        # Gemini payload format
        payload = {
            "contents": [
                {
                    "parts": [
                        {"text": prompt}
                    ]
                }
            ]
        }

        # Gemini request URL with key
        url = GEMINI_URL + f"?key={GEMINI_API_KEY}"

        headers = {"Content-Type": "application/json"}

        response = requests.post(url, json=payload, headers=headers, timeout=30)

        print(f"STATUS: {response.status_code}")
        print(f"BODY: {response.text}")

        if response.status_code != 200:
            return {"output": f"❌ Gemini API Error: {response.status_code}\n{response.text}"}

        result = response.json()

        # Extract final text
        output = result["candidates"][0]["content"]["parts"][0]["text"]

        return {"output": output}

    except Exception as e:
        return {"output": f"❌ Server Error: {str(e)}"}

# AI Content Generator Backend (Google Gemini)

## Setup Instructions

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Create .env file:**
   Copy `.env.example` to `.env` and add your Google Gemini API key:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and replace `your_api_key_here` with your actual Gemini API key.

3. **Get Gemini API Key:**
   - Go to https://makersuite.google.com/app/apikey
   - Create a new API key
   - Copy the key to your `.env` file

4. **Run the server:**
   ```bash
   uvicorn main:app --reload
   ```

## API Endpoint

- **POST /generate**
  - Request body: `{"prompt": "your text here"}`
  - Response: `{"output": "generated content"}`

The server will run on `http://localhost:8000`

## Google Gemini API Benefits

- ✅ **FREE** to use with generous limits
- ✅ **No rate limiting** issues like OpenAI
- ✅ **Fast response** times
- ✅ **High quality** AI responses

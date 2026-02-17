# FastAPI Backend

This service extracts video metadata and returns a direct stream URL using `yt-dlp`.

**Run locally**
1. Create and activate a virtualenv in `fastapi`.
2. Install dependencies with `pip install -r requirements.txt` if you have one, or install `fastapi`, `uvicorn`, and `yt-dlp` manually.
3. Start the server with `uvicorn main:app --reload --port 8000`.

**Environment**
1. Create `fastapi/.env`.
2. Set `FRONTEND_URL=http://localhost:3000`.

The app loads `fastapi/.env` on startup if the file exists.

**Deploy**
1. `fastapi/vercel.json` is included for Vercel Python deployments.

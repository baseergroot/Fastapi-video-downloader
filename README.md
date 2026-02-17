# YTDLP Studio

A two-part project for downloading video info and files using a Next.js UI plus a FastAPI backend powered by `yt-dlp`.

**Repo structure**
1. `nextjs` is the frontend UI and download proxy.
2. `fastapi` is the backend API that extracts video metadata.

**Local development**
1. Start the backend from `fastapi`: create and activate a virtualenv, install dependencies, then run `uvicorn main:app --reload --port 8000`.
2. Start the frontend from `nextjs`: install dependencies and run `npm run dev`.

**Environment variables**
1. Backend file: `fastapi/.env` with `FRONTEND_URL=http://localhost:3000`.
2. Frontend file: `nextjs/.env` with `API_URL=http://127.0.0.1:8000`.

**Deploy notes**
1. The backend includes a `fastapi/vercel.json` for deploying just the API.
2. The frontend can be deployed separately as a standard Next.js app.

If you want to run only one side, check the `README.md` inside each folder for single-service instructions.

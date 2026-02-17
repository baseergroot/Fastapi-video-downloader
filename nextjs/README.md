# Next.js Frontend

The UI for pasting a video link, previewing details, and downloading the file.

**Run locally**
1. Install dependencies in `nextjs` using `npm install`.
2. Start the dev server with `npm run dev`.

**Environment**
1. Create `nextjs/.env`.
2. Set `API_URL=http://127.0.0.1:8000`.

**Notes**
1. The thumbnail is proxied via `/api/thumbnail` to avoid cross-origin blocks.
2. The download action uses `/api/download` to stream the file to the browser.

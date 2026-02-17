import os
from pathlib import Path
import yt_dlp
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

  # url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
app = FastAPI()

def load_env_file() -> None:
  env_path = Path(__file__).resolve().parent / ".env"
  if not env_path.exists():
    return

  for raw_line in env_path.read_text().splitlines():
    line = raw_line.strip()
    if not line or line.startswith("#") or "=" not in line:
      continue
    key, value = line.split("=", 1)
    os.environ.setdefault(key.strip(), value.strip())

load_env_file()

frontend_url = os.getenv("FRONTEND_URL")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_url] if frontend_url else [],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
  return {"message": "Hello World"}


@app.get("/download")
async def download():
  url = "https://www.instagram.com/reel/DUs1dnuiI05/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="

  ydl_opts = {
    'format': 'best',  # Download best quality
    'outtmpl': '%(title)s.%(ext)s',  # Save as: video_title.extension
  }
  # ydl = yt_dlp.YoutubeDL(ydl_opts)
  # ydl.download([url])
  with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download([url])

  print("New Way Download complete!")

  return {"message": "Download complete!"}


@app.get("/stream")
async def stream_video(url: str):
  # url = "https://www.instagram.com/reel/DUs1dnuiI05/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="

  print({"url": url})

  ydl_opts = {
    'format': 'best',
    'quiet': True,
  }

  with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    info = ydl.extract_info(url, download=False)
    # video_url = info['url']  # Direct URL to the video file
    print(info)
  
  return {
    "video_url": info['url'],
    "title": info.get('title', 'video'),
    "thumbnail": info.get('thumbnail')
  }

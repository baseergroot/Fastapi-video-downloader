// app/api/download/route.ts
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const instagramUrl = request.nextUrl.searchParams.get('url')

  if (!process.env.API_URL) {
    return new Response("Missing API_URL environment variable", { status: 500 })
  }
  
  // Get video info from FastAPI
  const infoResponse = await fetch(
    `${process.env.API_URL}/stream?url=${encodeURIComponent(instagramUrl!)}`
  )
  const data = await infoResponse.json()
  
  // Fetch video
  const videoResponse = await fetch(data.video_url)
  
  // Stream it to user with download headers
  return new Response(videoResponse.body, {
    headers: {
      'Content-Type': 'video/mp4',
      'Content-Disposition': `attachment; filename="${data.title}.mp4"`
    }
  })
}

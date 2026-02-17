import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const thumbnailUrl = request.nextUrl.searchParams.get("url");

  if (!thumbnailUrl) {
    return new Response("Missing url", { status: 400 });
  }

  const upstreamResponse = await fetch(thumbnailUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    },
  });

  if (!upstreamResponse.ok || !upstreamResponse.body) {
    return new Response("Thumbnail unavailable", { status: 502 });
  }

  const contentType =
    upstreamResponse.headers.get("content-type") ?? "image/jpeg";

  return new Response(upstreamResponse.body, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}

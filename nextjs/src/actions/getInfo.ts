"use server"

import axios from "axios";

interface GetInfo {
  originalUrl?: string
  video_url?: string
  title?: string
  thumbnail?: string
  success: boolean
}

// const initialState: GetInfo = {
//   success: false
// }

export default async function getInfo(initialState: GetInfo, formData: FormData): Promise<GetInfo> {
  const apiUrl = process.env.API_URL

  if (!apiUrl) {
    throw new Error("Missing API_URL environment variable")
  }

  const res = await axios.get(`${apiUrl}/stream?url=${formData.get('url')}`)

  console.log({ res: res.data });
  return {
    success: true, 
    video_url: res.data.video_url,
    title: res.data.title,
    thumbnail: res.data.thumbnail,
    originalUrl: formData.get('url') as string
  }
}

import { type APIRoute } from "astro";

export const GET: APIRoute = ({ url }) => {
  const token = url.searchParams.get("token")

  console.log(token)

  return new Response(null, { status: 200 })
}

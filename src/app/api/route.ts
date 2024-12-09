import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  return Response.json({ message: "Hello from Next.js!", request });
}

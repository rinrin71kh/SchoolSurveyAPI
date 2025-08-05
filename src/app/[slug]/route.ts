import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } } // ❌ removed Promise
) {
  return NextResponse.json({ message: `Hello ${params.slug}!` });
}

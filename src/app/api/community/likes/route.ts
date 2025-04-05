import { NextResponse } from 'next/server';

let likes = 0;

export async function GET() {
  return NextResponse.json({ likes });
}

export async function POST(request: Request) {
  const { action } = await request.json();
  if (action === 'like') {
    likes++;
  } else if (action === 'dislike' && likes > 0) {
    likes--;
  }
  return NextResponse.json({ likes });
}

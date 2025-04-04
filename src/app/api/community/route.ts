import { NextResponse } from 'next/server';

const posts = [
  { id: 1, title: 'أول بوست', content: 'مرحبًا بكم في مجتمع NursLink' },
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const data = await request.json();
  posts.push({ id: posts.length + 1, ...data });
  return NextResponse.json({ message: 'تم إضافة البوست بنجاح!' });
}

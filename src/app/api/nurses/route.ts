import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const nurses = await prisma.nurse.findMany();
  return NextResponse.json(nurses);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const nurse = await prisma.nurse.create({
    data: {
      name: data.name,
      specialty: data.specialty,
      bio: data.bio,
      experience: data.experience,
      rating: Number(data.rating),
      certificates: data.certificates,
    },
  });

  return NextResponse.json(nurse);
}

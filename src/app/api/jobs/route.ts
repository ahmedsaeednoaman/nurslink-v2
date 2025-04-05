import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/auth';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || (session.user.role !== 'HOSPITAL' && session.user.role !== 'ADMIN')) {
    return NextResponse.json({ error: '??? ???? ??' }, { status: 403 });
  }

  const body = await req.json();
  const job = await prisma.job.create({ data: body });
  return NextResponse.json(job);
}

export async function GET() {
  const jobs = await prisma.job.findMany();
  return NextResponse.json(jobs);
}

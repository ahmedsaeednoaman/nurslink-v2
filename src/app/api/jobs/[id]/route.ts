import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// ????? ?????
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const updatedJob = await prisma.job.update({
    where: { id: Number(params.id) },
    data: body,
  });
  return NextResponse.json(updatedJob);
}

// ??? ?????
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await prisma.job.delete({
    where: { id: Number(params.id) },
  });
  return NextResponse.json({ message: '?? ??? ??????? ????? ?' });
}

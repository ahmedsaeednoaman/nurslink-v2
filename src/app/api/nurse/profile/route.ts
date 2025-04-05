import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  const updatedUser = await prisma.user.update({
    where: { id: Number((session.user as any).id) },
    data: {
      name: body.name,
      bio: body.bio,
    },
  });

  return NextResponse.json(updatedUser);
}

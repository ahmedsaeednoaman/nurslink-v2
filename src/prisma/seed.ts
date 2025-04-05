import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedAdminPassword = await bcrypt.hash('admin123', 10);
  const hashedNursePassword = await bcrypt.hash('nurse123', 10);

  await prisma.user.createMany({
    data: [
      {
        email: 'admin@nurslink.com',
        password: hashedAdminPassword,
        name: 'Admin User',
        role: 'ADMIN',   // <-- ???????
      },
      {
        email: 'nurse@nurslink.com',
        password: hashedNursePassword,
        name: 'Nurse User',
        role: 'NURSE',   // <-- ???????
      }
    ],
    skipDuplicates: true
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
  });

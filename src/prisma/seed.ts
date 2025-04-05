import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.job.createMany({
    data: [
      { title: "ممرض طوارئ", location: "القاهرة", experience: "3 سنوات" },
      { title: "ممرضة أطفال", location: "دبي", experience: "5 سنوات" },
      { title: "ممرض عناية مركزة", location: "الرياض", experience: "4 سنوات" },
    ],
  });
}

main()
  .then(() => console.log('Seeding finished.'))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

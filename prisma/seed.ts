import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.todo.createMany({
    data: [
      { title: 'Buy milk', order: 0 },
      { title: 'Feed cat', order: 1 },
      { title: 'Water plants', order: 2 },
      { title: 'Do laundry', order: 3 },
      { title: 'Clean bathroom', order: 4 },
      { title: 'Take out trash', order: 5 },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });

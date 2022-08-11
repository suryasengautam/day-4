const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


async function main() {
    const resp = prisma.student.findMany()
console.log(respw);
//   await prisma.batch.create({
//     data : {
//     name: "DSA",
//     students: {
//       create: [{
//         name: "abc",
//         college: "xyz",
//         graduated: true,
//         email: "abc@gmail.com",
//       },{
//         name: "pqr",
//         college: "xyz",
//         graduated: true,
//         email: "pqr@gmail.com",
//       }],
//     },
//   }});
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

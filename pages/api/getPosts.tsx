// const prismac = require('../../prisma')

const prisma = require("@prisma/client")


async function main() {
  try {
    const exist_status = await prisma.user.findUnique({
      where: {
        email: "sarveshkumar5513@gamil.com",
      },
    });
    console.log("exist_status is: ", exist_status);
    return exist_status;
  } catch (e) {
    // record not found
    if (e.code == "P2025") {
      return false;
    } else {
      // console.error(e)
      throw e;
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const categories = ['Business', 'Sports', 'Education', 'Technology']

  for (const category of categories) {
    const existingCategory = await prisma.category.findFirst({
      where: { name: category },
    })

    if (!existingCategory) {
      const newCategory = await prisma.category.create({
        data: { name: category },
      })
      console.log(`Category created: ${newCategory.name}`)
    } else {
      console.log(`Category already exists: ${existingCategory.name}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

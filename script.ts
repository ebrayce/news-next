import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const news = await prisma.news.create({
    data: {
      author: 'James Politi, Harriet Clarfelt',
      title:
        'Wall Street stocks fall after US jobs report smashes expectations - Financial Times',
      description:
        'S&P 500 drops and Treasury yields rise as 256,000 positions added in December',
      content:
        'FT newspaper delivered Monday-Saturday, plus FT Digital Edition delivered to your device Monday-Saturday.\\r\\n<ul><li></li>Weekday Print Edition<li></li>FT Weekend<li></li>',
    },
  })
  console.log(news)
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

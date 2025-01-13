import { PrismaClient } from '@prisma/client'
import { CATEGORIES, IMG_HEIGHT, IMG_WIDTH } from '../src/util/constants'

const prisma = new PrismaClient()

type Article = {
  title: string
  author: string
  content: string
  description: string
  urlToImage: string
  publishedAt: Date
}

async function createCategories() {
  for (const category of CATEGORIES) {
    const existingCategory = await prisma.category.findFirst({
      where: { name: category.name },
    })

    if (!existingCategory) {
      const newCategory = await prisma.category.create({
        data: { name: category.name, id: category.id },
      })
      console.log(`Category created: ${newCategory.name}`)
    } else {
      console.log(`Category already exists: ${existingCategory.name}`)
    }
  }
}

async function loadNews() {
  //load news base on category from newsapi
  const apiKey = process.env.NEWS_API_KEY
  const baseUrl = process.env.NEWS_API_BASE_URL

  function getRandomImage() {
    //The image on newsapi is not always available, so we use a random image from picsum
    const random = Math.floor(Math.random() * 1000)
    return `https://picsum.photos/${IMG_HEIGHT})/${IMG_WIDTH}?random=${random}`
  }

  for (const category of CATEGORIES) {
    fetch(
      `${baseUrl}?category=${category.name}&pageSize=100&apiKey=${apiKey}`
    ).then(async (res) => {
      const data = await res.json()
      const articles = data.articles

      const validArticles = articles.filter(
        (article: Article) =>
          article.title &&
          article.content &&
          article.author &&
          article.publishedAt &&
          article.description
      )

      const existingNewsTitles = await prisma.news
        .findMany({
          where: {
            title: {
              in: validArticles.map((article: Article) => article.title),
            },
          },
          select: {
            title: true,
          },
        })
        .then((news) => news.map((n) => n.title))

      const newArticles = validArticles.filter(
        (article: Article) => !existingNewsTitles.includes(article.title)
      )

      if (newArticles.length > 0) {
        const newNewsData = newArticles.map((article: Article) => ({
          content: article.content,
          title: article.title,
          author: article.author,
          description: article.description,
          imgurl: getRandomImage(),
          publishedAt: new Date(article.publishedAt),
          categoryId: category.id,
        }))

        await prisma.news.createMany({
          data: newNewsData,
        })

        console.log(`News created: ${category.name}`)
      } else {
        console.log(`No new news to create for category: ${category.name}`)
      }
    })
  }
}

async function main() {
  await createCategories()
  await loadNews()
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

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const categories = ['Business', 'Sports', 'Technology']

type Article = {
  title: string
  author: string
  description: string
  urlToImage: string
  publishedAt: Date
}

async function createCategories() {
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

async function loadNews() {
  //load news base on category from newsapi
  const apiKey = process.env.NEWS_API_KEY

  for (const category of categories) {
    fetch(
      `https://newsapi.org/v2/top-headlines?top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    ).then(async (res) => {
      const data = await res.json()
      const articles = data.articles

      for (const article of articles) {
        if (
          !article.title ||
          !article.content ||
          !article.author ||
          !article.urlToImage ||
          !article.publishedAt ||
          !article.description
        ) {
          continue
        }
        const existingNews = await prisma.news.findFirst({
          where: { title: article.title },
        })

        if (!existingNews) {
          const newNews = await prisma.news.create({
            data: {
              content: article.content,
              title: article.title,
              author: article.author,
              description: article.description,
              imgurl: article.urlToImage,
              publishedAt: new Date(article.publishedAt),
              categoryId: categories.indexOf(category) + 1,
            },
          })
          console.log(`News created: ${category}`)
        } else {
          console.log(`News already exists: ${category}`)
        }
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

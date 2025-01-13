import { PrismaClient } from '@prisma/client'
import { NewsEntity } from '@/types/types'

const prisma = new PrismaClient()
export const getNewsById = async (id: string): Promise<NewsEntity | null> => {
  return prisma.news.findUnique({
    where: { id: id },
  })
}

export const getNewsByCategoryName = async (
  categoryName: string
): Promise<NewsEntity[]> => {
  const category = await prisma.category.findFirst({
    where: {
      name: {
        contains: categoryName,
        mode: 'insensitive',
      },
    },
  })

  if (!category) {
    return []
  }

  return prisma.news.findMany({
    where: { categoryId: category.id },
  })
}

export const searchNews = async (query: string): Promise<NewsEntity[]> => {
  return prisma.news.findMany({
    where: {
      OR: [
        { title: { contains: query } },
        { description: { contains: query } },
      ],
    },
  })
}

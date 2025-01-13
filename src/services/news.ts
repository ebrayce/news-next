import { PrismaClient } from '@prisma/client'
import { NewsEntity } from '@/types/types'

const prisma = new PrismaClient()
export const getNewsById = async (id: string): Promise<NewsEntity | null> => {
  return prisma.news.findUnique({
    where: { id: id },
  })
}

export const getNewsByCategoryName = async (
  categoryName: string,
  page: number = 1,
  limit: number = 10
): Promise<{ data: NewsEntity[]; total: number; totalPages: number }> => {
  const category = await prisma.category.findFirst({
    where: {
      name: {
        contains: categoryName,
        mode: 'insensitive',
      },
    },
  })

  // If no category is found, return an empty result
  if (!category) {
    return { data: [], total: 0, totalPages: 0 }
  }

  // Get total count of news items for pagination
  const total = await prisma.news.count({
    where: { categoryId: category.id },
  })

  // Calculate the offset (skip) based on the page number
  const skip = (page - 1) * limit

  // Fetch paginated news items
  const data = await prisma.news.findMany({
    where: { categoryId: category.id },
    skip,
    take: limit,
  })

  // Calculate total pages
  const totalPages = Math.ceil(total / limit)

  return { data, total, totalPages }
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

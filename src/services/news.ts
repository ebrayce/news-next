import { NewsEntity } from '../../types/types'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const getNewsById = async (id: string): Promise<NewsEntity | null> => {
  return prisma.news.findUnique({
    where: { id: id },
  })
}

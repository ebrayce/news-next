import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type NewsProps = {
  id: string
  title: string|null
  content: string|null
  author: string|null
  description: string|null
  imgurl: string|null
  publishedAt: Date|null
  categoryId: string|null
} | null

const getNewsById = async (id: string): Promise<NewsProps|null> => {
  return prisma.news.findUnique({
    where: { id: id },
  })
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; newsTitle: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { newsTitle, id } = await params

  const news = await getNewsById(id)
  console.log(id, news, searchParams, newsTitle)

  if (!news) {
    return <div>News not found</div>
  }

  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.content}</p>
      <p>Author: {news.author}</p>
      <p>Description: {news.description}</p>
      {news.imgurl && <img src={news.imgurl} alt={news.title || 'News image'} />}
      <p>Published at: {news.publishedAt && new Date(news.publishedAt).toLocaleDateString() || 'No Idea'}</p>
    </div>
  )
}

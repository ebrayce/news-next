import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type NewsProps = {
  news: {
    id: number
    title: string
    content: string
    author: string
    description: string
    imgurl: string
    publishedAt: string
  } | null
}
const getNewsById = async (id) => {
  return prisma.news.findUnique({
    where: { id: id },
  })
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { newsTitle, id } = await params

  const news:NewsProps['news']  = await getNewsById(id)
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
      <img src={news.imgurl} alt={news.title} />
      <p>Published at: {new Date(news.publishedAt).toLocaleDateString()}</p>
    </div>
  )
}

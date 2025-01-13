import { getNewsById } from '@/services/news'

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

  const { title } = news

  return <div>{title}</div>
}

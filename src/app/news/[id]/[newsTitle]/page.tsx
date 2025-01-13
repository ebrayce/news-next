import { getNewsById } from '@/services/news'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; newsTitle: string }>
}) {
  const { id } = await params

  const news = await getNewsById(id)

  if (!news) {
    return <div>News not found</div>
  }

  const { title } = news

  return <div>{title}</div>
}

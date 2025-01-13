import { getNewsById } from '@/services/news'
import { NavBar } from '@/components/NavBar'

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

  return (
    <div>
      <NavBar currentQuery={''} />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
      </div>
    </div>
  )
}

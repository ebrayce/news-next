import { NavBar } from '@/components/NavBar'
import { getNewsByCategoryName } from '@/services/news'
import { FullCategoryNews } from '@/components/FullCategoryNews'

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const page = 1
  const limit = 5

  const news = await getNewsByCategoryName(category, page, limit)
  return (
    <div>
      <NavBar currentPage={category} currentQuery="" />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <FullCategoryNews categoryName={category} initialNews={news} />
      </div>
    </div>
  )
}

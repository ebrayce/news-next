import { NavBar } from '@/components/NavBar'
import { CategoryNews } from '@/components/CategoryNews'
import { getNewsByCategoryName } from '@/services/news'

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const categoryName = 'Technology';
  const page = 1;
  const limit = 5;


  const news = await getNewsByCategoryName(category, page, limit)
  return (
    <div>
      <NavBar currentPage={category} currentQuery='' />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4">{category} - News</h1>

        <CategoryNews categoryName={category} news={news} />
      </div>
    </div>
  )
}

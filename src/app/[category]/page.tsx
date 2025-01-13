import { NavBar } from '@/components/NavBar'
import { CategoryNews } from '@/components/CategoryNews'

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  return (
    <div>
      <NavBar currentPage={category} currentQuery={''} />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4">{category} - News</h1>

        <CategoryNews name={category} />
      </div>
    </div>
  )
}

import { getNewsById } from '@/services/news'
import { NavBar } from '@/components/NavBar'
import { News } from '@/components/News'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; newsTitle: string }>
}) {
  const { id } = await params

  const news = await getNewsById(id)


  return (
    <div>
      <NavBar currentQuery={''} />

      {!news && <div>Loading...</div>}

      {news && (
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <News {...news} />
        </div>
      )}
    </div>
  )
}

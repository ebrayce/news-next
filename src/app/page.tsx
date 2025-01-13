import { CategoryNews } from '@/components/CategoryNews'
import { CATEGORIES } from '@/util/constants'
import { NavBar } from '@/components/NavBar'
import { SearchResultNews } from '@/components/SearchResultNews'
import { getNewsByCategoryName } from '@/services/news'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const currentQuery = (await searchParams).query || ''
  const page = 1
  const limit = 5

  return (
    <div className="min-h-full">
      <NavBar currentPage="" currentQuery={currentQuery as string} />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {currentQuery && <SearchResultNews query={currentQuery as string} />}

        {!currentQuery &&
          (await Promise.all(
            CATEGORIES.map(async (category) => {
              const news = await getNewsByCategoryName(
                category.name,
                page,
                limit
              )
              return (
                <div key={category.name}>
                  <CategoryNews news={news} categoryName={category.name} />
                </div>
              )
            })
          ))}
      </div>
    </div>
  )
}

import { CategoryNews } from '@/components/CategoryNews'
import { CATEGORIES } from '@/util/constants'
import { NavBar } from '@/components/NavBar'
import { SearchResultNews } from '@/components/SearchResultNews'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const currentQuery = (await searchParams).query || ''
  

  return (
    <div className="min-h-full">
      <NavBar currentPage="" currentQuery={currentQuery as string} />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {currentQuery && (
            <SearchResultNews query={currentQuery} />
          )}

          {!currentQuery && CATEGORIES.map((category) => (
            <div key={category.name}>
              <CategoryNews name={category.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { ShotCategoryNews } from '@/components/ShotCategoryNews'
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

  // Fetch news for all categories concurrently
  const categoryNews = await Promise.all(
    CATEGORIES.map(async (category) => {
      const news = await getNewsByCategoryName(category.name, page, limit)
      return { categoryName: category.name, news }
    })
  )

  return (
    <div className="min-h-full">
      <NavBar currentPage="" currentQuery={currentQuery as string} />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {currentQuery ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SearchResultNews query={currentQuery as string} />
          </div>
        ) : (
          <div>
            {categoryNews.map(({ categoryName, news }) => (
              <div key={categoryName} className="py-8">
                {news.data.length > 0 ? (
                  <ShotCategoryNews news={news} categoryName={categoryName} />
                ) : (
                  <p className="text-gray-500 text-lg mt-4 text-center">
                    No news found for {categoryName}.
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

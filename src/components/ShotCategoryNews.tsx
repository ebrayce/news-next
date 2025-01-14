import { NewsCard } from '@/components/NewsCard'
import { formatDateTime, getNewsUrl } from '@/util/utils'
import { NewsEntity } from '@/types/types'
import Link from 'next/link'

type CategoryNewsProps = {
  news: { data: NewsEntity[]; total: number; totalPages: number }
  categoryName: string
}
export const ShotCategoryNews = async ({
  news,
  categoryName,
}: CategoryNewsProps) => {
  if (!news) {
    return <div>No news found</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{categoryName} News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.data.map((news) => (
          <div key={news.id}>
            <NewsCard
              title={news.title}
              publishedAt={
                news.publishedAt
                  ? formatDateTime(new Date(news.publishedAt))
                  : ''
              }
              description={news.description}
              image={news.imgurl}
              url={getNewsUrl(news.id, news.title || '')}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href={`/${categoryName}/`}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Load More
        </Link>
      </div>
    </div>
  )
}

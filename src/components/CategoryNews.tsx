import { getNewsByCategoryName } from '@/services/news'
import { NewsCard } from '@/components/NewsCard'
import { getNewsUrl } from '@/util/utils'

export const CategoryNews = async ({ name }: { name: string }) => {
  const news = await getNewsByCategoryName(name)

  if (!news) {
    return <div>No news found</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((news) => (
        <div key={news.id}>
          <NewsCard
            title={news.title}
            publishedAt={
              news.publishedAt
                ? new Date(news.publishedAt).toLocaleDateString()
                : ''
            }
            description={news.description}
            image={news.imgurl}
            url={getNewsUrl(news.id, news.title || '')}
          />
        </div>
      ))}
    </div>
  )
}

import { NewsCard } from '@/components/NewsCard'
import { formatDateTime, getNewsUrl } from '@/util/utils'
import { NewsEntity } from '@/types/types'
import { getNewsByCategoryName } from '@/services/news'


type CategoryNewsProps = {
  news: { data: NewsEntity[]; total: number; totalPages: number }
  categoryName: string
}
export const CategoryNews = async ({ news, categoryName }:CategoryNewsProps) => {

  if (!news) {
    return <div>No news found</div>
  }

  const { data, totalPages, total } = await getNewsByCategoryName(categoryName)



  return (
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
  )
}

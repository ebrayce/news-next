import { NewsCard } from '@/components/NewsCard'
import { getNewsUrl } from '@/util/utils'
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

  function formatDateTime(date: Date): string {
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    const formattedTime = date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${formattedDate} at ${formattedTime}`;
  }

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

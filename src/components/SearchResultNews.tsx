import { searchNews } from '@/services/news'
import { NewsCard } from '@/components/NewsCard'
import { getNewsUrl } from '@/util/utils'

export const SearchResultNews = async ({ query }: { query: string }) => {
  const news = await searchNews(query)

  return news.map((news) => (
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
  ))
}

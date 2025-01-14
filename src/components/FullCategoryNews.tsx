'use client'

import { useState, useEffect } from 'react'
import { NewsEntity } from '@/types/types'
import { NewsCard } from '@/components/NewsCard'
import { capitalizeFirstLetter, formatDateTime, getNewsUrl } from '@/util/utils'
import { toast } from 'react-toastify'

type FullCategoryNewsProps = {
  initialNews: { data: NewsEntity[]; total: number; totalPages: number }
  categoryName: string
}

export const FullCategoryNews = ({
  initialNews,
  categoryName,
}: FullCategoryNewsProps) => {
  const [news, setNews] = useState(initialNews.data)
  const [totalPages, setTotalPages] = useState(initialNews.totalPages)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const LIMIT = 5
  const tolerance = 2

  const loadMoreNews = async () => {
    if (loading || page >= totalPages) return
    setLoading(true)
    try {
      const response = await fetch(
        `/api/addd?category=${categoryName}&limit=${LIMIT}&page=${page + 1}`
      )
      const newNews = await response.json()
      setNews((prevNews) => [...prevNews, ...newNews.data])
      setPage((prevPage) => prevPage + 1)
      setTotalPages(newNews.totalPages)
    } catch (error) {
      toast('Failed to load more news:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const handleScroll = async () => {
      if (
        window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight - tolerance
      ) {
        return
      }

      await loadMoreNews()
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [page, loading, loadMoreNews])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        {capitalizeFirstLetter(categoryName)} News
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((newsItem) => (
          <div key={newsItem.id}>
            <NewsCard
              title={newsItem.title}
              publishedAt={
                newsItem.publishedAt
                  ? formatDateTime(new Date(newsItem.publishedAt))
                  : ''
              }
              description={newsItem.description}
              image={newsItem.imgurl}
              url={getNewsUrl(newsItem.id, newsItem.title || '')}
            />
          </div>
        ))}
      </div>

      {loading && (
        <p className="text-blue-500 text-lg text-center mt-5">
          Loading more news...
        </p>
      )}

      {!loading && page >= totalPages && (
        <p className="text-gray-500 text-lg text-center mt-5">
          No more news to load
        </p>
      )}
    </div>
  )
}

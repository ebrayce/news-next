import { Image } from '@/components/Image'

type NewsCardProps = {
  title: string | null
  publishedAt: string | null
  description: string | null
  image: string | null
  url: string | null
}

export const NewsCard = ({
  url,
  description,
  title,
  publishedAt,
}: NewsCardProps) => {
  return (
    <a href={url || '#'}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-60">
          <Image
            alt="News Image"
            url="https://images.unsplash.com/photo-1542282081-9e0a16bb7366"
            width={300}
            height={300}
          />
        </div>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
          {(publishedAt && new Date(publishedAt).toLocaleDateString()) ||
            'No Idea'}
        </div>
      </div>
    </a>
  )
}

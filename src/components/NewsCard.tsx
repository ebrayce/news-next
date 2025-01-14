import { Image } from '@/components/Image'
import Link from 'next/link'
import { IMG_HEIGHT, IMG_WIDTH } from '@/util/constants'

type NewsCardProps = {
  title: string | null
  publishedAt: string | null
  description: string | null
  image: string | null
  url: string | null
}

export const NewsCard = ({
  image,
  url,
  description,
  title,
  publishedAt,
}: NewsCardProps) => {
  return (
    <Link href={url || '#'}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden m-6">
        {image && (
          <div className="relative">
            <Image
              className="w-full object-cover"
              alt="News Image"
              url={image}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
            />
          </div>
        )}

        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
          {publishedAt}
        </div>
      </div>
    </Link>
  )
}

import { Image } from '@/components/Image'
import { NewsEntity } from '@/types/types'
import { IMG_HEIGHT, IMG_WIDTH } from '@/util/constants'
import { formatDateTime } from '@/util/utils'

export const News = ({
  title,
  content,
  author,
  description,
  imgurl,
  publishedAt,
}: NewsEntity) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto my-6">
      {imgurl && (
        <div className="relative">
          <Image
            className="w-full object-cover"
            height={IMG_HEIGHT}
            width={IMG_WIDTH}
            alt={title || 'News image'}
            url={imgurl}
          />
        </div>
      )}

      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>

        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <p className="text-gray-700 text-base mb-6">{content}</p>

        <div className="text-sm text-gray-500 flex justify-between">
          <span>Author: {author || 'Unknown'}</span>
          <span>
            {(publishedAt && formatDateTime(publishedAt)) || 'No Idea'}
          </span>
        </div>
      </div>
    </div>
  )
}

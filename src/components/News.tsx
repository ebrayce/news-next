import { Image } from '@/components/Image'
import { NewsEntity } from '@/types/types'

export const News = ({
  title,
  content,
  author,
  description,
  imgurl,
  publishedAt,
}: NewsEntity) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>Author: {author}</p>
        <p>Description: {description}</p>
        {imgurl && (
          <Image
            height={400}
            width={600}
            alt={title || 'News image'}
            url={imgurl}
          />
        )}
        <p>
          Published at:{' '}
          {(publishedAt && new Date(publishedAt).toLocaleDateString()) ||
            'No Idea'}
        </p>
      </div>
    </>
  )
}

'use client'
import NextImage from 'next/image'
import { useState } from 'react'
import { IMG_HEIGHT, IMG_WIDTH } from '@/util/constants'

type ImageProps = {
  url: string
  width: number
  height: number
  alt?: string
  className?: string
}

export const Image = ({
  url,
  className,
  width = IMG_WIDTH,
  height = IMG_HEIGHT,

  alt,
}: ImageProps) => {
  const [src, setSrc] = useState(url)

  const handleError = () => {
    setSrc(
      `https://picsum.photos/${IMG_HEIGHT}/${IMG_WIDTH}?random=` +
        Math.floor(Math.random() * 1000)
    )
  }

  return (
    <NextImage
      className={className}
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
      onError={handleError}
    />
  )
}

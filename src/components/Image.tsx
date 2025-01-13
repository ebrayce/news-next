'use client'
import NextImage from 'next/image'
import { useState } from 'react'

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
  width = 50,
  height = 50,
  alt,
}: ImageProps) => {
  const [src, setSrc] = useState(url)

  const handleError = () => {
    setSrc(
      'https://picsum.photos/200/300?random=' + Math.floor(Math.random() * 1000)
    )
  }

  return (
    <NextImage
      className={className}
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      onError={handleError}
    />
  )
}

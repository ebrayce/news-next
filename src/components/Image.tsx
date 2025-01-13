import NextImage from 'next/image';

type ImageProps = {
  url: string
  width:  number
  height:  number
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
  return (
    <NextImage
      className={className}
      src={url}
      alt={alt || ''}
      width={width}
      height={height}
    />
  )
}

type ImageProps = {
  url: string
  width: string | number
  height: string | number
  alt?: string
  className?: string
}

export const Image = ({
  url,
  className,
  width = '20px',
  height = '50px',
  alt,
}: ImageProps) => {
  return (
    <img
      className={className}
      src={url}
      alt={alt || ''}
      width={width}
      height={height}
    />
  )
}

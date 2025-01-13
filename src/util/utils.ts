import slugify from 'slugify'

export const getNewsUrl = (id: string, title: string) => {
  const slug = slugify(title, { lower: true, strict: true })
  return `/news/${id}/${slug}`
}


export const formatDateTime = (date: Date): string => {
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  const formattedTime = date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return `${formattedDate} at ${formattedTime}`;
}

import slugify from 'slugify'

export const getNewsUrl = (id: string, title: string) => {
  const slug = slugify(title, { lower: true, strict: true })
  return `/news/${id}/${slug}`
}

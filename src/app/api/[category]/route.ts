import { NextRequest } from 'next/server'
import { getNewsByCategoryName } from '@/services/news'

export async function GET(request: NextRequest) {
  const url = request.nextUrl
  const params = Object.fromEntries(url.searchParams.entries())
  const {category, page, limit} = params
  const pageNumber = Number(page)
  const limitNumber = Number(limit)
  const data = await getNewsByCategoryName(category, pageNumber, limitNumber)
  return Response.json(data)
}

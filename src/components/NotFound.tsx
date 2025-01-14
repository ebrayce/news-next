'use client'

import Link from 'next/link'

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">No News Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        News not found
      </p>
      <Link href="/" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-600">
        Go Back to Home
      </Link>
    </div>
  )
}

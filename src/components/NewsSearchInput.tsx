'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import clsx from 'clsx'
import { Input } from '@headlessui/react'

type NewsSearchInputProps = {
  data: string
}
export const NewsSearchInput = ({ data }: NewsSearchInputProps) => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState(data)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    const params = new URLSearchParams(window.location.search)
    params.set('query', inputValue)
    router.push(`${window.location.pathname}?${params.toString()}`)
  }

  return (
    <Input
      onChange={handleInputChange}
      className={clsx(
        'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
      )}
    />
  )
}

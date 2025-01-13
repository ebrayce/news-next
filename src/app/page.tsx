import { Image } from '@/components/Image'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Input,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Business', href: '/news/business', current: false },
  { name: 'Sports', href: '/news/sports', current: false },
  { name: 'Technology', href: '/news/technology', current: false },
]

export default function Home() {
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <Image
                  alt="Your Company"
                  url="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="size-8"
                  width={300}
                  height={300}

                 />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Input
                  className={clsx(
                    'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                  )}
                />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={clsx(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <Input
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )}
              />
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-60">
                <Image
                  alt="News Image"
                  className="object-cover w-full h-full"
                  height={'99'}
                  url="https://images.unsplash.com/photo-1542282081-9e0a16bb7366"
                  width="88"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  News Title
                </h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nec purus semper, egestas purus nec, lacinia eros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

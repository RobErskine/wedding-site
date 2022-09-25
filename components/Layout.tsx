import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import {
  Bars3Icon,
  CalendarIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  HomeIcon,
  HeartIcon,
  XMarkIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

import Bottom from '../components/Footer'

import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/', icon: HeartIcon, current: true },
  { name: 'Schedule', href: '/schedule', icon: CalendarIcon, current: false },
  { name: 'Accomodations', href: '/accomodations', icon: HomeIcon, current: false },
  { name: 'Travel', href: '/travel', icon: PaperAirplaneIcon, current: false },
  { name: 'Explore the Shore', href: '/explore-the-shore', icon: MapPinIcon, current: false },
  { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon, current: false },
  { name: 'Registry', href: '/registry', icon: ShoppingBagIcon, current: false },
  { name: 'Soft RSVP', href: '/rsvp', icon: EnvelopeIcon, current: false }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [open, setOpen] = useState(false)

  const currentSlug = router.asPath;

  return (
    <>
      <div>
        <Head>
          <title>Rob & Molly are getting married!</title>
          <link rel="icon" type="image/jpg" href="/rob-and-molly-profile.jpg"></link>
        </Head>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-100 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <Link href="/" onClick={() => setSidebarOpen(false)}>
                        <Image src="/logo.png" alt="Rob and Molly" width="481px" height="364px"/>
                      </Link>
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={`mobile-` + item.href}
                          href={item.href}
                          onClick={() => setSidebarOpen(false)}
                        >
                          <a onClick={() => setSidebarOpen(false)} className={classNames(
                            currentSlug === item.href  ? 'bg-pink-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full block'
                          )}>
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </Link>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:flex md:w-64 md:flex-col translate-y-1/2 ml-8 -mt-24">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-1 flex-col border border-gray-200 bg-white rounded-3xl align-middle">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <Link href="/">
                  <Image src="/logo.png" className="p-2 cursor-pointer" alt="Rob and Molly" width="481px" height="364px" />
                </Link>
              </div>
              <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                {navigation.map((item) => (
                  <Link
                    key={`desktop-` + item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <a className={classNames(
                      currentSlug === item.href  ? 'bg-pink-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full block'
                    )}>
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6 inline-block'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                  </a>
                </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-pink-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* <Bottom/> */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <Link href={item.href} className="text-base text-gray-300 hover:text-gray-900">
                  <a>
                    {item.name}
                  </a>
                </Link>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2022 || Built by hand with ❤️ by Rob &amp; Molly</p>
        </div>
      </footer>
    </>
  )
}
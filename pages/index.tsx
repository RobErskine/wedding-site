import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { 
  ArrowTopRightOnSquareIcon, 
  CalendarDaysIcon,
  MapIcon,
  GlobeAltIcon
} from '@heroicons/react/20/solid'

const Home: NextPage = () => {
  return (
    <div>
      <div className="relative mt-8">
        <div className="absolute inset-x-8 bottom-0 h-1/2 bg-gray-100 rounded-3xl" />
          <div className="mx-auto max-w-9xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-3xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="/homepage/homepage.png"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-blue-400 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Rob &amp; Molly are</span>
                  <span className="block text-orange-300 mb-24"><em>getting married!</em></span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                  Rob &amp; Molly will be tying the knot on August 20th, 2023 in Asbury Park, NJ, and would love for you to attend.
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      href="/rsvp"
                    >
                      <a className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8">
                        RSVP
                      </a>
                    </Link>
                    <Link
                      href="/schedule"
                    >
                      <a className="flex items-center justify-center rounded-md border border-transparent bg-blue-700 bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">
                        Our Wedding Day
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-gray-100 lg:mx-8 rounded-3xl mt-8">
          <div className="h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 rounded-3xl">
            <img
              className="h-full w-full object-cover rounded-3xl"
              src="/homepage/closeup.png"
              alt=""
            />
            <div className="absolute inset-0 bg-blue-400 mix-blend-multiply rounded-3xl" />
          </div>
          <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="text-lg font-semibold text-gray-500">We can&apos;t wait to celebrate with you on...</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-orange-300 sm:text-3xl"><em>Sunday, August 20th, 2023!</em></p>
              <p className="mt-3 text-lg text-gray-700">
                We are getting married at the Asbury Park Hotel in Asbury, NJ. We can&apos;t wait to celebrate with you!
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a
                    download
                    href="/rob-and-molly-wedding-invite.ics"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    Save the date to your calendar
                    <CalendarDaysIcon className="-mr-1 ml-3 h-5 w-5 text-gray-700" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {  
    CalendarDaysIcon
  } from '@heroicons/react/20/solid'

const Registry: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Thank you! || Rob & Molly</title>
      </Head>
      <h1 className="text-3xl font-bold mt-64 text-center">
        Thanks for letting us know!
      </h1>
      <p className="text-gray-500 text-xl mt-8 text-center mb-6">This is just the soft RSVP. We will send out a more formal RSVP closer to the actual date.</p>
      <div className="inline-flex mb-64 mx-auto justify-center items-center justify w-full">
        <a
            download
            href="/rob-and-molly-wedding-invite.ics"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md shadow"
        >
            Save the date to your calendar
            <CalendarDaysIcon className="-mr-1 ml-3 h-5 w-5 text-gray-700" aria-hidden="true" />
            </a>
        </div>
    </div>
  )
}

export default Registry

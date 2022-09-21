import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Registry: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-32 text-center">
        We haven&apos;t set up a registry yet, but we&apos;re working on it!
      </h1>
      <p className="text-gray-500 text-xl mt-8 text-center mb-64">Coming soon! <Link href="/rsvp"><a className="text-blue-500 underline hover:underline">When you soft-RSVP</a></Link>, sign up for e-mail alerts and we will let you know when it is available.</p>
    </div>
  )
}

export default Registry

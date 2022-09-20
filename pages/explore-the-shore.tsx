import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const explore = [
  {
    
  }
]

const ExploreTheShore: NextPage = () => {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <Image
          src="/beach.webp"
          alt=""
          className="h-96 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore the Shore</h2>
          <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <iframe src="https://www.google.com/maps/@/data=!3m1!4b1!4m3!11m2!2sVuOeA579SfuPhSDP1TaDWw!3e3?shorturl=1"></iframe>
      </div>
    </div>
  )
}

export default ExploreTheShore
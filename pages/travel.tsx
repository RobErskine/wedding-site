import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { BoltIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'


const planes = [
  {
    name: 'Newark Liberty International Airport',
    description: 'We recommend flying through Newark Liberty International Airport.  It is located less than an hour from Asbury Park and can be easily accessed using car services or by train.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Philadelphia International Airport',
    description: 'Flying into Philly is always an option as well, however it is a bit further away from Asbury Park.  It is about 90 minutes away from Asbury Park and can be easily accessed using car services or by train.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Atlantic City International Airport',
    description:
      'Located about an hour south of Asbury Park and would be a good option if renting a car.',
    icon: ScaleIcon,
  }
]

const Travel: NextPage = () => {
  return (
    <div>
      <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Travel</span>{' '}
              <span className="block text-blue-600 xl:inline">Plans</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Knowing many of our guests will be traveling from out of state, below is just about every way you can get to our wedding.
            </p>
          </div>
        </main>
        <div className="overflow-hidden">
          <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 mt-12">
            <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Planes</h2>
                <p>By air</p>
              </div>
              <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
              {planes.map((route) => (
                <div key={route.name}>
                  <dt>
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
                      <route.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-gray-900">{route.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{route.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel

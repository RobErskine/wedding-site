import type { NextPage } from 'next'
import { Fragment, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const features = [
  {
    name: 'The Ceremony',
    time: '3:00 PM',
    location: 'Baronet Rooftop at the Asbury Hotel',
    description: 'The ceremony will start promptly at 3:30. We request that guests arrive at 3:00 to allow enough time to access the elevator to get to our rooftop ceremony.',
    imageSrc: '/events/rooftopphoto.jpg',
    imageAlt: 'Rooftop of the Asbury Hotel where will be getting married',
  },
  {
    name: 'The Reception',
    time: '4:00 PM - 9:00 PM',
    location: 'The Hall & Terrace at the Asbury Hotel',
    description:
      'Cocktails, dinner, and dancing will follow the ceremony',
    imageSrc: '/events/hotel.webp',
    imageAlt: 'The Reception Hall at the Asbury Hotel',
  },
  {
    name: 'The After Party',
    time: '9:00 PM - Whenever Rob needs to go to bed',
    location: 'Johnny Mac\'s House of Spirits', 
    description:
      'Shuttles will be provided from the Asbury Hotel to the bar',
    imageSrc: '/events/johnnymac.jpg',
    imageAlt: 'Johnny Mac House of Spirits bar',
  },
]

const Schedule: NextPage = () => {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sunday, August 20th, 2023</h2>
          <p className="mt-4 text-gray-500">
            Please join us in celebrating our wedding!
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                )}
              >
                <h2 className="text-blue-400">{feature.time}</h2>
                <h3 className="text-2xl font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                )}
              >
                <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                  <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Schedule

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'

import { 
  ChevronDownIcon
} from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const explores = {
    explore: {
      beaches: [
        {
          name: 'Asbury Park',
          description: 'Weekday $6, Weekend $9',
          link: '',
          image: ''
        },
        {
          name: 'Manasquan',
          description: 'Daily badge $10. Oh, this is also where Rob proposed to Molly.',
          link: '',
          image: ''
        },
        {
          name: 'Belmar',
          description: 'Daily badge $9',
          link: '',
          image: ''
        },
        {
          name: 'Spring Lake',
          description: 'Daily badge $20',
          link: '',
          image: ''
        }
      ],
      activities: [
        {
          name: 'Silverball Pinball Museum',
          description: 'This is the first spot Molly took Rob when he came to visit her hometown. She may have regreted it as they stayed until he played every single Baseball game in the museum.',
          link: 'https://www.silverballmuseum.com/asbury-park/',
          image: ''
        },
        {
          name: 'Asbury Park Pedal Boats',
          description: '',
          link: 'https://www.asburyparkpedalboats.com/',
          image: ''
        },
        {
          name: 'Shipwreck Island Mini Golf',
          description: 'Rob has yet to beat molly in any mini golf game.',
          link: 'https://bradleybeachminigolf.com/',
          image: ''
        },
        {
          name: 'Belmar Parasail',
          description: '',
          link: 'https://www.belmarparasail.com/',
          image: ''
        },
        {
          name: 'Jenkinson\'s Boardwalk',
          description: '',
          link: 'https://jenkinsons.com/',
          image: ''
        },
        {
          name: 'Hot Sand Glass Blowing',
          description: '',
          link: 'http://www.hotsandap.com/',
          image: ''
        },
        {
          name: 'Asbury Lanes',
          description: 'This iconic bowling alley is actually somehow attached to our wedding venue. Show up early to the wedding for 50% off bowling! (disclaimer: this is not a real deal)',
          link: 'https://www.asburylanes.com/',
          image: ''
        },
        {
          name: 'The Stone Pony',
          description: 'Rob and Molly have seen a few shows here, most recently Modest Mouse, one of Rob\'s childhood favorites. Ask Molly\'s brother, Matt, how the show was!',
          link: 'https://www.stoneponyonline.com/',
          image: ''
        },
        
      ]
    },
    eat: {
      drinks: [
        {
          name: '',
          description: '',
          link: '',
          image: ''
        },
        {
          name: '',
          description: '',
          link: '',
          image: ''
        },
        {
          name: '',
          description: '',
          link: '',
          image: ''
        },
        {
          name: '',
          description: '',
          link: '',
          image: ''
        },
        {
          name: '',
          description: '',
          link: '',
          image: ''
        },
        {
          name: '',
          description: '',
          link: '',
          image: ''
        },
        {
          name: '',
          description: '',
          link: '',
          image: ''
        },
        {
          name: '',
          description: '',
          link: '',
          image: ''
        },
        {
          name: '',
          description: '',
          link: '',
          image: ''
        },

        {
          name: '',
          description: '',
          link: '',
          image: ''
        },
      ]
    }
}

const ExploreTheShore: NextPage = () => {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
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
            There are so many fun things to do down by the Jersey shore. Here are a few of our select favorites if you (and we encourage it!) make a long weekend out of our wedding weekend.
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-8 max-w-4xl block mx-auto">Explore</h2>
        <dl className="mt-4 space-y-6 divide-y divide-gray-200 border-2 border-gray-200 p-4 border-lg rounded-lg max-w-4xl mx-auto">
          <Disclosure as="div" className="" key="explore">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-gray-900 text-2xl font-bold">Beaches</span>
                      <p className="block w-full text-xl">Here are some of our favorite beaches on the Jersey Shore</p>
                    </div>
                    <span className="ml-6 flex h-7 items-center mt-4">
                      <ChevronDownIcon
                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12 border-t-2 pt-4">
                  {explores.explore.beaches.map((item) => (
                    <div className="flex flex-col  pb-4" key={item.name}>
                      <span className="text-2xl">{item?.name}</span>
                      <span className="text-xl text-gray-400">{item?.description}</span>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </dl>

        <dl className="mt-4 space-y-6 divide-y divide-gray-200 border-2 border-gray-200 p-4 border-lg rounded-lg max-w-4xl mx-auto">
          <Disclosure as="div" className="" key="explore">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-gray-900 text-2xl font-bold">Activites</span>
                      <p className="block w-full text-xl">Here are some of our favorite spots near the Wedding Venue</p>
                    </div>
                    <span className="ml-6 flex h-7 items-center mt-4">
                      <ChevronDownIcon
                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12 border-t-2 pt-4">
                  {explores.explore.activities.map((item) => (
                    <div className="flex flex-col  pb-4" key={item.name}>
                      <span className="text-2xl">{item?.name}</span>
                      <span className="text-xl text-gray-400">{item?.description}</span>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </dl>

        <h2 className="text-3xl font-bold mt-8 max-w-4xl block mx-auto">EAT</h2>
        <dl className="mt-4 space-y-6 divide-y divide-gray-200 border-2 border-gray-200 p-4 border-lg rounded-lg max-w-4xl mx-auto">
          <Disclosure as="div" className="" key="explore">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-gray-900 text-2xl font-bold">Breakfast</span>
                      <p className="block w-full text-xl">Here&apos;s a short list of our favorite breakfast and brunch spots</p>
                    </div>
                    <span className="ml-6 flex h-7 items-center mt-4">
                      <ChevronDownIcon
                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12 border-t-2 pt-4">
                  {explores.explore.activities.map((item) => (
                    <div className="flex flex-col  pb-4" key={item.name}>
                      <span className="text-2xl">{item?.name}</span>
                      <span className="text-xl text-gray-400">{item?.description}</span>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </dl>

        <dl className="mt-4 space-y-6 divide-y divide-gray-200 border-2 border-gray-200 p-4 border-lg rounded-lg max-w-4xl mx-auto">
          <Disclosure as="div" className="" key="explore">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-gray-900 text-2xl font-bold">Lunch</span>
                      <p className="block w-full text-xl">Sammies and other easy bites can be found in here</p>
                    </div>
                    <span className="ml-6 flex h-7 items-center mt-4">
                      <ChevronDownIcon
                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12 border-t-2 pt-4">
                  {explores.explore.activities.map((item) => (
                    <div className="flex flex-col  pb-4" key={item.name}>
                      <span className="text-2xl">{item?.name}</span>
                      <span className="text-xl text-gray-400">{item?.description}</span>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </dl>

        <dl className="mt-4 space-y-6 divide-y divide-gray-200 border-2 border-gray-200 p-4 border-lg rounded-lg max-w-4xl mx-auto">
          <Disclosure as="div" className="" key="explore">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-gray-900 text-2xl font-bold">Dinner</span>
                      <p className="block w-full text-xl">Whether you are looking for a dive or a 5-star meal, we got ya covered</p>
                    </div>
                    <span className="ml-6 flex h-7 items-center mt-4">
                      <ChevronDownIcon
                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12 border-t-2 pt-4">
                  {explores.explore.activities.map((item) => (
                    <div className="flex flex-col  pb-4" key={item.name}>
                      <span className="text-2xl">{item?.name}</span>
                      <span className="text-xl text-gray-400">{item?.description}</span>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </dl>

        <dl className="mt-4 space-y-6 divide-y divide-gray-200 border-2 border-gray-200 p-4 border-lg rounded-lg max-w-4xl mx-auto">
          <Disclosure as="div" className="" key="explore">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-gray-900 text-2xl font-bold">Dessert</span>
                      <p className="block w-full text-xl">Mmm... chocolate.</p>
                    </div>
                    <span className="ml-6 flex h-7 items-center mt-4">
                      <ChevronDownIcon
                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12 border-t-2 pt-4">
                  {explores.explore.activities.map((item) => (
                    <div className="flex flex-col  pb-4" key={item.name}>
                      <span className="text-2xl">{item?.name}</span>
                      <span className="text-xl text-gray-400">{item?.description}</span>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </dl>

        <dl className="mt-4 space-y-6 divide-y divide-gray-200 border-2 border-gray-200 p-4 border-lg rounded-lg max-w-4xl mx-auto">
          <Disclosure as="div" className="" key="explore">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-gray-900 text-2xl font-bold">DRANKS</span>
                      <p className="block w-full text-xl">Molly wouldn&apos;t let me put this one first :( </p>
                    </div>
                    <span className="ml-6 flex h-7 items-center mt-4">
                      <ChevronDownIcon
                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12 border-t-2 pt-4">
                  {explores.explore.activities.map((item) => (
                    <div className="flex flex-col  pb-4" key={item.name}>
                      <span className="text-2xl">{item?.name}</span>
                      <span className="text-xl text-gray-400">{item?.description}</span>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </dl>

      </div>
    </div>
  )
}

export default ExploreTheShore
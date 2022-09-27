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
          link: 'https://www.cityofasburypark.com/185/Asbury-Park-Beaches',
          image: ''
        },
        {
          name: 'Manasquan',
          description: 'Daily badge $10. Oh, this is also where Rob proposed to Molly.',
          link: '',
          image: '/propose.jpeg'
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
      breakfast: [
        {
          name: 'Cardinal Provisions',
          description: 'Also our wedding caterer!',
          link: 'https://www.crdnal.com/',
          image:''
        },
        {
          name: 'Mariners Cove',
          description: '',
          link: '',
          image:''
        },
        {
          name: 'Max Devros',
          description: '',
          link: '',
          image:''
        },
        {
          name: 'Ray\'s Cafe',
          description: '',
          link: '',
          image:''
        },
        {
          name: 'Committed Pig',
          description: '',
          link: '',
          image:''
        },
      ],
      lunch: [
        {
          name: 'Surf Taco',
          description: 'Molly\'s first job was at the shop in Manasquan!',
          link: '',
          image:''
        },
        {
          name: 'Joe Leones',
          description: '',
          link: '',
          image:''
        },
        {
          name: 'Jersey Mikes',
          description: 'Check out the first Jersey Mikes ever in Point Pleasant!',
          link: '',
          image: ''
        }
      ],
      dinner: [
        {
          name: 'Porta',
          description: '',
          link: 'https://pizzaporta.com/asbury-park',
          image:''
        },
        {
          name: 'Taka',
          description: '',
          link: '',
          image:''
        },
        {
          name: 'Lubranos Trattoria',
          description: 'A classic McCann favorite.',
          link: '',
          image:''
        },
        {
          name: 'St. Stephens Green Publick House',
          description: '',
          link: '',
          image:''
        }
      ],
      dessert: [
        {
          name: 'Strollos',
          description: '',
          link: 'https://strolloslighthouse.com/',
          image:''
        },
        {
          name: 'Sundaes',
          description: '',
          link: 'https://www.sundaesicecreamplace.com/',
          image:''
        },
        {
          name: 'Hoffmans',
          description: '',
          link: 'http://hoffmansicecream.net/',
          image:''
        },
        {
          name: 'Surfside',
          description: '',
          link: 'http://www.surfsidefrozencustard.com/welcome',
          image:''
        },
      ],
      drinks: [
        {
          name: 'Watermark',
          description: '',
          link: 'https://watermarkap.com/',
          image: ''
        },
        {
          name: 'Asbury Park Distilling',
          description: '',
          link: 'https://apdistilling.com/',
          image: ''
        },
        {
          name: 'Asbury Festhalle & Biergarten',
          description: '',
          link: 'https://www.asburybiergarten.com/',
          image: ''
        },
        {
          name: 'Wonder Bar',
          description: '',
          link: 'https://wonderbarasburypark.com/',
          image: ''
        },
        {
          name: 'Bond Street Bar',
          description: '',
          link: 'https://bondstreetap.com/',
          image: ''
        },
        {
          name: 'Johnny Macs',
          description: '',
          link: 'https://www.johnnymacbar.com/',
          image: ''
        },
        {
          name: 'Leggetts Sand Bar',
          description: 'Molly used to work here!',
          link: '',
          image: ''
        },
        {
          name: 'Parker House',
          description: '',
          link: '',
          image: ''
        },
        {
          name: 'Reef & Barrel',
          description: '',
          link: '',
          image: ''
        },

        {
          name: 'Joe\'s Surf Shack',
          description: '',
          link: '',
          image: ''
        },
      ]
    }
}

const CardName = (name: string) => {
  // if(dest.length > 0){
  //   return (
  //     <a href={dest} target="_blank" rel="noreferrer">
  //       <p className="text-lg font-bold mt-2">{name}</p>
  //     </a>
  //   )
  // } else {
  //   return (
  //     <p className="text-lg font-bold mt-2">{name}</p>
  //   )
  // }

  if(name){
    return (
      <p className="text-lg font-bold mt-2">{name}</p> 
    )
  }
}

function CardDesc(description: string){
  if(description){
    return (
      <p className="text-gray-500 text-center mt-2">{description}</p>
    )
  }
}

function CardImage(image: string, alt: string){
  if(image){
    return (
      <img src={image} alt={alt} className="max-w-2xl mb-2 block" />
    )
  }
}

// function CardContent (name: string, image: string, description: string, dest: string) {
//   return (
//     <div className="flex flex-col justify-left items-center">
//       <CardImage image={image} alt={name} />
//       <CardName name={name} dest={dest} />
//       <CardDesc description={description} />
//     </div>
//   )
// }

const ExploreTheShore: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Explore the Shore || Rob & Molly</title>
      </Head>
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
          <p className="mt-4 text-gray-500"><a className="text-blue-500 underline" href="https://www.google.com/maps/@/data=!3m1!4b1!4m3!11m2!2sVuOeA579SfuPhSDP1TaDWw!3e3?shorturl=1" target="_blank" rel="noreferrer">Check out all of our favorites on an interactive Google Map</a>.</p>
        </div>
        
        <h2 className="text-3xl font-bold mt-8 max-w-4xl block mx-auto pl-4">Explore</h2>
        <dl className="mt-4 space-y-6 divide-y divide-gray-200 border-2 border-gray-200 p-4 border-lg rounded-lg max-w-4xl mx-auto">
          <Disclosure as="div" className="" key="beaches">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-blue-500 text-2xl font-bold">Beaches</span>
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
                  {explores.explore.beaches.map((item) => {
                    return (
                      <div className="flex flex-col  pb-4" key={item.name}>
                        <img src={item?.image} alt="" className="max-w-md rounded-2xl"/>
                        <span className="text-2xl">{item?.name}</span>
                        <span className="text-xl text-gray-400">{item?.description}</span>
                      </div>
                    )
                  })}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </dl>

        <dl className="mt-4 space-y-6 divide-y divide-gray-200 border-2 border-gray-200 p-4 border-lg rounded-lg max-w-4xl mx-auto">
          <Disclosure as="div" className="" key="activities">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-blue-500 text-2xl font-bold">Activites</span>
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

        <h2 className="text-3xl font-bold mt-8 max-w-4xl block mx-auto pl-4">Food <em className="font-black mr-1">&amp;</em> Drink</h2>
        <dl className="mt-4 space-y-6 divide-y divide-gray-200 border-2 border-gray-200 p-4 border-lg rounded-lg max-w-4xl mx-auto">
          <Disclosure as="div" className="" key="breakfast">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-blue-500 text-2xl font-bold">Breakfast</span>
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
                  {explores.eat.breakfast.map((item) => (
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
          <Disclosure as="div" className="" key="lunch">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-blue-500 text-2xl font-bold">Lunch</span>
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
                  {explores.eat.lunch.map((item) => (
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
          <Disclosure as="div" className="" key="dinner">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-blue-500 text-2xl font-bold">Dinner</span>
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
                  {explores.eat.dinner.map((item) => (
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
          <Disclosure as="div" className="" key="dessert">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-blue-500 text-2xl font-bold">Dessert</span>
                      <p className="block w-full text-xl">Mmm... ice cream</p>
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
                  {explores.eat.dessert.map((item) => (
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
          <Disclosure as="div" className="" key="dranks">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <div>
                      <span className="block w-full font-medium text-blue-500 text-2xl font-bold">DRANKS</span>
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
                  {explores.eat.drinks.map((item) => (
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
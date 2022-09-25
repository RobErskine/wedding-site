import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { 
  ArrowTopRightOnSquareIcon, 
  CalendarDaysIcon,
  MapIcon,
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/20/solid'

const locations = [
  {
    name: 'The Asbury Hotel',
    role: '(Our Wedding Venue, Room Block Details to Come)',
    imageUrl:
      '/accomodations/hotel.jpeg',
    bio: 'With a history shaped by artistic rebels and rock ‘n’ roll legends, the Asbury Park hotel sets the stage for an out-of-the-box getaway.',
    websiteUrl: 'https://www.theasburyhotel.com/',
    googleMapsUrl: 'https://www.google.com/maps/dir//The+Asbury+Hotel,+210+Fifth+Ave,+Asbury+Park,+NJ+07712/@40.2236111,-74.0038554,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c2266a4633c6af:0xe5cfe7d64c5ba075!2m2!1d-74.0016667!2d40.2236111!3e0',
  },
  {
    name: 'The Berkley Hotel',
    role: '(4 min walk to the venue)',
    imageUrl:
      '/accomodations/berkleyhotel.jpeg',
    bio: 'Nestled along the Jersey Shore, this oceanfront hotel provides beautiful views of the Atlantic Ocean and easy access to great attractions in Asbury Park.',
    websiteUrl: 'https://www.berkeleyhotelnj.com/',
    googleMapsUrl: 'https://www.google.com/maps?ll=40.22521,-73.99948&z=14&t=m&hl=en-US&gl=US&mapclient=apiv3',
  },
  {
    name: 'Asbury Ocean Club',
    role: '(4 min walk to venue)',
    imageUrl:
      '/accomodations/Asbury-Ocean-Club-Asbury-Park-hero-dusk.jpeg',
    bio: 'Once the Jersey Shore’s best kept secret, now it’s crown jewel—a beacon for the best in art, music, food and more.',
    websiteUrl: 'https://hotel.asburyoceanclub.com/',
    googleMapsUrl: 'https://www.google.com/maps/dir//1101+Ocean+Ave,+Asbury+Park,+NJ+07712/@40.221759,-74.0028731,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c22669e4b5d1a7:0x7a0d28c5737e32a7!2m2!1d-74.0006791!2d40.221759!3e0',
  },
  {
    name: 'The Empress Hotel',
    role: '(9 min walk to venue)',
    imageUrl:
      '/accomodations/empress-hotel.jpeg',
    bio: 'This Hotel opened as a luxury resort for vacationing families in the 1960s. It was a successful resort, attracting the likes of Judy Garland and Liza Minnelli.',
    websiteUrl: 'https://asburyempress.com/',
    googleMapsUrl: 'https://www.google.com/maps/place/The+Empress+Hotel/@40.2187018,-74.0033843,17z/data=!3m1!4b1!4m8!3m7!1s0x89c226416be2552b:0x68a1e7be0182068f!5m2!4m1!1i2!8m2!3d40.2186944!4d-74.0011346',
  }
]

const nearbyLocations = [
  {
    name: 'Homewood Suites by Hilton Eatontown',
    role: '(13 min drive to venue)',
    imageUrl: '/accomodations/homewood.webp',
    bio: '',
    websiteUrl: 'https://www.marriott.com/en-us/hotels/ewres-sheraton-eatontown-hotel/overview/',
    googlesMapsUrls: 'https://www.google.com/maps/dir//Homewood+Suites+by+Hilton+Eatontown,+4+Industrial+Way+E,+Eatontown,+NJ+07724/@40.276363,-74.0445389,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c22f6f8c98e1dd:0x3a8b657fd73b7b5d!2m2!1d-74.0423502!2d40.276363!3e0'
  },
  {
    name: 'Sheraton Eatontown Hotel',
    role: '(13 min drive to venue)',
    imageUrl: '/accomodations/sheraton.webp',
    bio: '',
    websiteUrl: 'https://www.hilton.com/en/hotels/ewrethw-homewood-suites-eatontown/',
    googlesMapsUrls: 'https://www.google.com/maps/place/Sheraton+Eatontown+Hotel/@40.275599,-74.0454062,17z/data=!3m1!4b1!4m8!3m7!1s0x89c22f6fbb477935:0xa5c2a8613005e393!5m2!4m1!1i2!8m2!3d40.275599!4d-74.0432175'
  }
]

const Accomodations: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Accomodations || Rob & Molly</title>
      </Head>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Accomodations</h1>
            <p className="text-xl text-gray-600">
              We encourage you to book your accomodations early as Asbury Park is a popular destination summer destination!
            </p>
            <p className="text-xl text-gray-400">
              We recommend to have something booked by January or February- houses will book quickly!
            </p>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">Hotels in Asbury Park</h2>
            <ul
              role="list"
              className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
            >
              {locations.map((location) => (
                <li key={location.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img className="rounded-lg object-cover shadow-lg" src={location.imageUrl} alt="" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="space-y-1 text-lg font-medium leading-6">
                          <h3>{location.name}</h3>
                          <p className="text-blue-600 text-sm">{location.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{location.bio}</p>
                        </div>
                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a target="_blank" rel="noreferrer" href={location.websiteUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Website for {location.name}</span>
                              <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a target="_blank" rel="noreferrer" href={location.googleMapsUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Website for {location.name}</span>
                              <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Hotels Nearby</h2>
              <ul
                role="list"
                className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
              >
                {nearbyLocations.map((location) => (
                  <li key={location.name} className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img className="rounded-lg object-cover shadow-lg" src={location.imageUrl} alt="" />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="space-y-1 text-lg font-medium leading-6">
                            <h3>{location.name}</h3>
                            <p className="text-blue-600 text-sm">{location.role}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">{location.bio}</p>
                          </div>
                          <ul role="list" className="flex space-x-5">
                            <li>
                              <a target="_blank" rel="noreferrer" href={location.websiteUrl} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Website for {location.name}</span>
                                <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a target="_blank" rel="noreferrer" href={location.googleMapsUrl} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Website for {location.name}</span>
                                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-blue-600">Looking for somewhere else to stay?</h2>
            <p className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-4xl">
              Other Accommodations
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-500">
              AirBnB and VRBO are great options for those looking to stay in the area a few extra days to enjoy and explore the shore.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-500">There are a range of short-term vacation rentals and boutique inns in the area that may also be of interest to you.</p>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-500">We recommend opening your search to the following towns: Asbury Park, Ocean Grove, Bradley Beach, Belmar, Avon by the Sea, Sea Girt, Manasquan and Long Branch.</p>
            <hr className="mt-6 block max-w-xl mx-auto" />
            <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-500">We&apos;ve put together <a href="https://www.airbnb.com/wishlists/v/1164654977" className="text-blue-700 hover:text-blue-900 hover:underline">a list of AirBnB</a> rentals in the area that would be good for both small and large groups looking to stay for a long weekend.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accomodations
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const faqs = [
  {
    question: 'What\'s with the soft RSVP?',
    answer: 'Knowing many will be traveling from out of state to the wedding, hoping to get a realistic headcount to share with vendors as we continue to plan our big day throughout the year.'
  },
  {
    question: 'Where should I stay and for how long?',
    answer: 'Check out our accommodations page! We will be organizing a room block at the Asbury Hotel soon (too early to do so now) for those who don\'t plan on staying a while. We\'re hoping that a lot of our out of town guests can make a mini-vacation out of our wedding weekend, so would recommend booking a local AIrBnb or house rental in the area.'
  },
  {
    question: 'What should I do if I cannot make it?',
    answer:
      'Please RSVP and let us know as soon as possible, so we are able to plan accordingly. We will miss having you there!',
  },
  {
    question: 'What should I wear?',
    answer: 'Cocktail attire! The wedding ceremony will (fingers-crossed) happen on the rooftop while the reception will be indoor/outdoor with AC indoors and vented tents outdoors. Considering the wedding is in the late summer, we suggest dressing for warm weather.    '
  },
  {
    question: 'Is there parking?',
    answer: 'Yes! The Asbury Hotel offers valet parking for the night of the wedding.'
  },
  {
    question: 'What if I have dietary restrictions or allergies?',
    answer: 'All guests will have a choice of their preferred meal the day of the event. Please let the server or wait staff know of any allergies or restrictions so they can accommodate.'
  },
  {
    question: 'Can I bring a plus one?',
    answer: 'Unfortunately we are limited and can only accommodate those specified on the invitation.'
  },
  {
    question: 'Are children welcome?',
    answer: 'We are planning an adults only wedding, with the exception of our flower girls and ring bearer.'
  }
]

const FAQ: NextPage = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ooo wee,<br/> what’s up with that?</h2>
              <p className="mt-4 text-lg text-gray-500">
                We get it. Weddings are hard. Here are some of the most common questions we’ve received. Have a question not listed here?{' '}
                <a href="mailto:us@robandmolly.us" className="font-medium text-blue-600 hover:text-blue-500">
                  <br/>Shoot us a note at <span className="underline">us@robandmolly.us</span>
                </a>{' '}
              </p>
            </div>
            <div className="mt-12 lg:col-span-2 lg:mt-0">
              <dl className="space-y-12">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg font-medium leading-6 text-gray-900">{faq.question}</dt>
                    <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ

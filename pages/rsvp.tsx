import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const RSVP: NextPage = () => {
  return (
    <form className="max-w-xl mx-auto mt-20" name="soft-rsvp" data-netlify="true" method="POST" action="/soft-rsvp-thanks">
      <Head>
        <title>Soft RSVP || Rob & Molly</title>
      </Head>
      <input
        type="hidden"
        name="form-name"
        value="soft-rsvp"
      />
      <h1 className="text-3xl font-bold mb-4">
        Soft RSVP
      </h1>
      <p className="mb-6 text-lg text-gray-500">Knowing many will be traveling from out of state to the wedding, hoping to get a realistic headcount to share with vendors as we continue to plan our big day throughout the year.</p>
      <p className="mb-8 text-sm text-gray-400">All fields required*</p>
      <div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name:
          </label>
          <div className="mt-1">
            <input
              type="name"
              name="name"
              id="name"
              className="block p-4 border border-grey-500 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Bryce Harper"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email Address:
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full p-4 border border-grey-500 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="phanatic@phillies.com"
            />
          </div>
        </div>
        <div className="relative flex items-start mb-8">
          <div className="flex h-5 items-center">
            <input id="subscribe" aria-describedby="subscribe-description" name="subscribe" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
          </div>
          <div className="ml-2 text-sm">
            <label htmlFor="subscribe" className="font-medium text-gray-700 ">Want updates over email?</label>
            <span id="subscribe-description" className="text-gray-400"><span className="sr-only">Email updates: </span> We&apos;ll send updates every once in awhile</span>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="canAttend" className="block text-sm font-medium text-gray-700">
            Are you planning to attend?
          </label>
          <select
            id="canAttend"
            name="canAttend"
            className="mt-1 block p-4 py-6 border border-grey-500 w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="Yes! I'll be there"
          >
            <option>Yes! I&apos;ll be there</option>
            <option>Hmm, need to see.</option>
            <option>Sorry, won&apos;t be able to make it!</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
          Any additional questions or concerns?
        </label>
        <div className="mt-1">
          <textarea
            rows={3}
            name="comment"
            id="comment"
            className="block w-full p-4 border border-grey-500 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={''}
          />
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
        >
          Submit your soft RSVP
        </button>
      </div>
    </form>
  )
}

export default RSVP
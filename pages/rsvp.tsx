import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const RSVP: NextPage = () => {
  return (
    <form className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">
        Soft RSVP
      </h1>
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
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Are you able to attend?
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block p-4 py-5 border border-grey-500 w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="Yes! I'll be there"
          >
            <option>Yes! I'll be there</option>
            <option>Hmm, need to see.</option>
            <option>Sorry, won't be able to make it!</option>
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
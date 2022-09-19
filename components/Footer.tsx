const Footer = () => {  
  return (
    <footer>
      <div className="bg-white">
        <div className="mx-auto max-w-5xl px-4 pt-0 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-blue-500 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
            <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-bold tracking-tight text-white">Sign up for updates</h2>
                <p className="mt-4 max-w-3xl text-lg text-indigo-100">
                    Once or twice a month, we'll send you updates on our wedding planning progress! You can unsubscribe at any time.
                </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
                    placeholder="Enter your email"
                />
                <button
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                    Notify me
                </button>
                </form>
                <p className="mt-3 text-sm text-blue-100">
                We care about the protection of your data. Read our{' '}
                <a href="#" className="font-medium text-white underline">
                    Privacy Policy.
                </a>
                </p>
            </div>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer;
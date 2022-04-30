export function Hero() {
  return (
    <div className="lg:relative bg-gray-900">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48">
        <div className="px-4 sm:px-8 xl:pr-16">
          <h1 className="text-white text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">The Erlang</span>{' '}
            <span className="block text-indigo-600 xl:inline">Community</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Go to Discuss Forum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

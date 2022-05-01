import { SparklesIcon } from '@heroicons/react/outline';

export function Features() {
  return (
    <div className="bg-white py-32 overflow-hidden flex flex-col gap-24 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-6 lg:py-16">
          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
            <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Fault tolerant</h2>
            <p className="text-lg text-gray-500">
              The Erlang VM, known for running low-latency, distributed and fault-tolerant systems.
            </p>
          </div>
        </div>
        <img
          className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          src="/images/placeholder.svg"
          alt="Pending"
        />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-6 lg:py-16">
          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
            <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Concurrent</h2>
            <p className="text-lg text-gray-500">
              Erlang uses the actor model - shared-nothing concurrency via message
            </p>
          </div>
        </div>
        <img
          className="lg:order-first w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          src="/images/placeholder.svg"
          alt="Pending"
        />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-6 sm:px-6 lg:py-16">
          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
            <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Functional</h2>
            <p className="text-lg text-gray-500">
              Multi-clause functions with pattern matching and guards are the building blocks of Erlang code.
            </p>
          </div>
        </div>
        <img
          className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          src="/images/placeholder.svg"
          alt="Pending"
        />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-6 lg:py-16">
          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
            <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Immutable</h2>
            <p className="text-lg text-gray-500">
              All data in Erlang is immutable, allowing for safer and easier-to-reason-about concurrency.
            </p>
          </div>
        </div>
        <img
          className="lg:order-first w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          src="/images/placeholder.svg"
          alt="Pending"
        />
      </div>
    </div>
  );
}

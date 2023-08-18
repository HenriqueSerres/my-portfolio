import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mt-12 flex flex-col items-center gap-8 text-center md:mt-24 md:gap-4">
      <h1 className="text-5xl text-slate-200">404</h1>
      <h2 className="text-2xl text-slate-200">Not Found</h2>
      <p className="text-xl text-slate-200">
        Ooops, could not find requested resource!
      </p>
      <Link
        href="/"
        className="mt-8 w-fit rounded-lg border-4 border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-lg font-bold tracking-wider duration-300 hover:border-white hover:text-white"
      >
        Return Home
      </Link>
    </div>
  )
}

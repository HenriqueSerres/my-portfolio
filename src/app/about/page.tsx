'use client'

import Header from '@/components/Head'
import Image from 'next/image'

const handleClick = () => {
  window.open('/professionalresume.pdf')
}

export default function About() {
  return (
    <main>
      <Header />
      <div className="mt-16 flex justify-center">
        <h1 className="text-xl text-zinc-300">About me...</h1>
      </div>
      <div className="mt-8 flex basis-1/2 flex-col items-center sm:mr-8">
        <p className="mb-4 text-xl text-zinc-300">
          Hi, my name is Henrique Serres. I am a full stack developer that
          specializes in ReactJS, Javascript, TypeScript as a front-end
          developer and NodeJS, ExpressJS, MongoDB, MySQL as a back-end.
        </p>
        <p className="mb-4 text-xl text-zinc-300">
          I have been studied in Analysis and Systems Development graduation.
          Before that, I make a Full Stack course at Trybe, a school of the
          future. I have been working as a developer for 2 years.
        </p>
        <p className="text-xl text-zinc-300">
          Growing new gray hairs is part of the process I love going through on
          a daily basis. But I love this challenge!
        </p>
        <button
          onClick={handleClick}
          className="mt-8 w-fit rounded-lg border-4 border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-lg font-bold tracking-wider duration-300 hover:border-white hover:text-white"
        >
          Resume
        </button>
      </div>
      <div className="mt-5 flex grid-cols-3 items-center justify-center gap-20 p-8">
        <Image
          src="/family1.jpg"
          alt="family together"
          height={250}
          width={250}
          className="rounded-full ring-4 ring-blue-300 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900"
        />
        <Image
          src="/dogs.jpg"
          alt="me and my dogs"
          height={250}
          width={250}
          className="rounded-full ring-4 ring-blue-300 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900"
        />
        <Image
          src="/family2.jpg"
          alt="family together"
          height={250}
          width={250}
          className="rounded-full ring-4 ring-blue-300 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900"
        />
      </div>
    </main>
  )
}

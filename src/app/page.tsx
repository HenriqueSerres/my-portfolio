import Header from '@/components/Head'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mt-10 lg:mt-20">
        <div className="mt-6 grid grid-cols-none lg:grid-cols-2">
          <div className="grid justify-center">
            <Image
              src="/HenriqueS.jpg"
              alt="Picture of Henrique"
              width={350}
              height={350}
              className="rounded-full ring-4 ring-blue-300 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900"
            />
          </div>
          <div className="justtify-center mt-10 grid grid-cols-3 gap-1 lg:grid-cols-4 lg:gap-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              alt="nextjs icon"
              width={350}
              height={350}
              className="mx-4 w-20 bg-white px-2"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="js icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="typescript icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="docker icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20 bg-purple-900"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="mysql icon"
              width={350}
              height={350}
              className="mx-4 w-20 bg-white"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

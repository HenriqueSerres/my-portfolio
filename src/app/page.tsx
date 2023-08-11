import Header from '@/components/Head'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mt-16 flex justify-center">
        <Image
          src="/HenriqueS.jpg"
          alt="Picture of Henrique"
          width={350}
          height={350}
          className="rounded-full ring-4 ring-blue-300 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900"
        />
      </div>
    </main>
  )
}

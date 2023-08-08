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
          width={400}
          height={400}
          className="rounded-lg ring-4 ring-slate-600"
        />
      </div>
    </main>
  )
}

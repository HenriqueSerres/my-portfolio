import Link from 'next/link'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Header() {
  return (
    <header className="flex flex-row justify-between bg-slate-600 p-6 font-mono">
      <nav className="flex flex-row justify-start gap-5 pl-4">
        <Link
          href="https://www.linkedin.com/in/henrique-serres/"
          className="text-2xl hover:text-slate-300"
        >
          <SiLinkedin />
        </Link>
        <Link
          href="https://github.com/HenriqueSerres"
          className="text-2xl hover:text-slate-300"
        >
          <SiGithub />
        </Link>
      </nav>
      <div>
        <h1 className="text-4xl">{`Hi, I'm Henrique Serres`}</h1>
      </div>
      <nav className="flex flex-row justify-end gap-5 pr-4">
        <Link href="/" className="text-lg hover:text-slate-300">
          Home
        </Link>
        <Link href="/about" className="text-lg hover:text-slate-300">
          About
        </Link>
        <Link href="/projects" className="text-lg hover:text-slate-300">
          Projects
        </Link>
        <Link href="/contact" className="text-lg hover:text-slate-300">
          Contact
        </Link>
      </nav>
    </header>
  )
}

import Link from 'next/link'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Header() {
  return (
    <header className="flex flex-row  justify-between gap-4 bg-slate-600 p-6 font-mono">
      <div>
        <Link href="https://www.linkedin.com/in/henrique-serres/">
          <SiLinkedin />
        </Link>
        <Link href="https://github.com/HenriqueSerres">
          <SiGithub />
        </Link>
      </div>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}

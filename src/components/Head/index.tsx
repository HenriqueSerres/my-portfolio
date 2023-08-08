'use client'

import { useIsCurrentPath } from '@/hooks/usePath'
import Link from 'next/link'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Header() {
  const generalLinkStyle = 'text-lg hover:text-slate-300 color-slate-600'
  const currentLinkStyle = 'text-lg text-slate-300 color-slate-600'

  return (
    <header className="flex w-full flex-row justify-between bg-slate-600 p-6 font-mono">
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
      <nav className="flex flex-row justify-end gap-5 pr-4 text-center">
        <Link
          href="/"
          className={
            useIsCurrentPath('/') ? currentLinkStyle : generalLinkStyle
          }
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            useIsCurrentPath('/about') ? currentLinkStyle : generalLinkStyle
          }
        >
          About
        </Link>
        <Link
          href="/projects"
          className={
            useIsCurrentPath('/projects') ? currentLinkStyle : generalLinkStyle
          }
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={
            useIsCurrentPath('/contact') ? currentLinkStyle : generalLinkStyle
          }
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}

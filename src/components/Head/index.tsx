'use client'

import { useIsCurrentPath } from '@/hooks/usePath'
import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import MenuHamburguer from '../menuHamburguer'

export default function Header() {
  const generalLinkStyle = 'text-lg hover:text-slate-300 color-slate-600'
  const currentLinkStyle = 'text-lg text-slate-300 color-slate-600'

  const [clickMenu, setClickMenu] = useState(false)

  return (
    <>
      <header className="flex w-full flex-row justify-between bg-gradient-to-r from-cyan-500 to-blue-500 p-4 font-mono lg:p-6">
        <nav className="flex animate-pulse flex-row justify-start gap-5 pr-2 lg:pl-4">
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
          <h1 className="mt-2 text-sm font-extrabold lg:text-4xl">{`Hi, I'm Henrique Serres.`}</h1>
        </div>
        <nav>
          <div className="hidden flex-row justify-end gap-5 pr-4 text-center lg:flex">
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
                useIsCurrentPath('/projects')
                  ? currentLinkStyle
                  : generalLinkStyle
              }
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={
                useIsCurrentPath('/contact')
                  ? currentLinkStyle
                  : generalLinkStyle
              }
            >
              Contact
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => setClickMenu(!clickMenu)}>
              <GiHamburgerMenu size={30} />
            </button>
          </div>
        </nav>
      </header>
      {clickMenu && <MenuHamburguer />}
    </>
  )
}

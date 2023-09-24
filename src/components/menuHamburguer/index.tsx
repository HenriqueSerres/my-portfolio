import { useIsCurrentPath } from '@/hooks/usePath'
import Link from 'next/link'

export default function MenuHamburguer() {
  const generalLinkStyle = 'text-lg hover:text-slate-300 color-slate-600'
  const currentLinkStyle = 'text-lg text-slate-300 color-slate-600'
  return (
    <div className="fixed left-0 top-20 h-screen w-full bg-white">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full border-b border-zinc-600 p-4">
          <Link
            href="/"
            className={
              useIsCurrentPath('/') ? currentLinkStyle : generalLinkStyle
            }
          >
            Home
          </Link>
        </div>
        <div className="w-full border-b border-zinc-600 p-4">
          <Link
            href="/about"
            className={
              useIsCurrentPath('/about') ? currentLinkStyle : generalLinkStyle
            }
          >
            About
          </Link>
        </div>
        <div className="w-full border-b border-zinc-600 p-4">
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
        </div>
        <div className="w-full border-b border-zinc-600 p-4">
          <Link
            href="/contact"
            className={
              useIsCurrentPath('/contact') ? currentLinkStyle : generalLinkStyle
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

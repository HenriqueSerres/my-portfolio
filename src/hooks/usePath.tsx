'use client'
import { usePathname } from 'next/navigation'

export const useIsCurrentPath = (link: string) => {
  const path = usePathname()

  if (path === link) return true
  return false
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import profile from '@/public/profile.jpeg'
import { cn } from '@/lib/utils'
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"

import type { ReactNode } from 'react'
import { config } from '@/lib/config'

export default function Home() {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 my-16">
      {/* Center */}
      <HeroSection />
      <AboutSection />
    </div>
  )
}

type ExternalLinkProps = Readonly<{
  href: string
  children: ReactNode
}>

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex flex-row items-center justify-center w-full py-2 gap-1',
        'font-medium text-sm rounded-md hover:bg-accent/50',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
      )}
    >
      {children}
      <ArrowTopRightIcon className="size-3" />
    </a>
  )
}

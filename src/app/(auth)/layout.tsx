import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/shared/Logo'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border">
        <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6">
          <Link href="/" aria-label="ThisIsMyProperty.com home">
            <Logo />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 grid min-h-[calc(100dvh-3.5rem)] lg:grid-cols-[1fr_1.2fr]">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-12">{children}</div>
        <div className="relative hidden lg:block">
          <Image
            src="/images/auth-couple.jpg"
            alt="Homeowners reviewing their home's health on a laptop"
            fill
            priority
            sizes="55vw"
            className="object-cover object-right"
          />
        </div>
      </main>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Building2, Archive, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/shared/Logo'

const features = [
  {
    icon: Building2,
    title: 'Property Management',
    image: '/images/houses/house-1.jpg',
    description:
      'Track every property in one place. Values, details, history — all organized and accessible.',
  },
  {
    icon: Archive,
    title: 'Smart Document Vault',
    image: '/images/feature-vault.jpg',
    description:
      'Securely store deeds, warranties, receipts, and permits. Find anything in seconds.',
  },
  {
    icon: TrendingUp,
    title: 'Portfolio Intelligence',
    image: '/images/feature-health.jpg',
    description:
      'Understand your portfolio at a glance. Track value growth and spot opportunities.',
  },
  {
    icon: Shield,
    title: 'Renovation Tracker',
    image: '/images/feature-maintenance.jpg',
    description:
      'Document every improvement and its cost. Build a complete record that increases resale value.',
  },
]

const trustPoints = ['No credit card required', 'Setup in 2 minutes', 'Cancel anytime']

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link href="/" aria-label="ThisIsMyProperty.com home">
            <Logo showTagline />
          </Link>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-4 pb-16 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Property Intelligence Platform — Early Access
          </div>
          <h1 className="mb-4 text-balance font-serif text-[2rem] font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-balance">Know Your Home&rsquo;s Health.</span>
            <span className="block text-balance text-primary">Predict What Comes Next.</span>
          </h1>
          <p className="mb-6 font-serif text-lg italic text-primary sm:text-xl">
            Your home&rsquo;s health at your fingertips.&trade;
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground sm:text-lg">
            One intelligent platform that helps homeowners understand, maintain, protect and
            document their property — while giving real estate professionals better tools to
            serve clients before, during and long after the transaction.
          </p>
          <div className="mx-auto flex max-w-sm flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <Button size="lg" asChild className="w-full gap-2 px-8 sm:w-auto">
              <Link href="/signup">
                Start for Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustPoints.map((text) => (
              <div key={text} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
                {text}
              </div>
            ))}
          </div>
          <div className="relative mx-auto mt-10 aspect-[760/451] sm:mt-14 w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-white shadow-card-hover">
            <Image
              src="/images/hero-devices.jpg"
              alt="ThisIsMyProperty.com dashboard on a laptop and phone"
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="mb-4 font-serif text-2xl font-semibold sm:text-3xl">
              Everything you need to manage your properties
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Powerful tools built for modern property owners and professionals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description, image }) => (
              <div
                key={title}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-card transition-colors hover:border-primary/30"
              >
                <div className="relative aspect-[16/10] bg-muted">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-navy p-8 text-center sm:p-12">
            <Image src="/images/cta-homes.jpg" alt="" fill sizes="672px" className="object-cover opacity-30" />
            <div className="relative">
              <h2 className="mb-4 font-serif text-2xl font-semibold text-white sm:text-3xl">
                Ready to take control of your property portfolio?
              </h2>
              <p className="mb-8 text-white/80">
                Join homeowners and property professionals who trust ThisIsMyProperty.com.
              </p>
              <Button size="lg" asChild className="gap-2">
                <Link href="/signup">
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <Logo />
          <p>© {new Date().getFullYear()} ThisIsMyProperty.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

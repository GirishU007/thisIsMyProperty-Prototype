import Link from 'next/link'
import { Building2, Archive, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Building2,
    title: 'Property Management',
    description:
      'Track every property in one place. Values, details, history — all organized and accessible.',
  },
  {
    icon: Archive,
    title: 'Smart Document Vault',
    description:
      'Securely store deeds, warranties, receipts, and permits. Find anything in seconds.',
  },
  {
    icon: TrendingUp,
    title: 'Portfolio Intelligence',
    description:
      'Understand your portfolio at a glance. Track value growth and spot opportunities.',
  },
  {
    icon: Shield,
    title: 'Renovation Tracker',
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
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <Building2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold tracking-tight">ThisIsOurMoney</span>
          </div>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-6 pb-20 pt-24 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Property Intelligence Platform — Early Access
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Your Properties.
            <br />
            <span className="text-primary">Your Wealth.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            The intelligent platform for homeowners and property professionals. Manage
            properties, store documents, and understand your portfolio like never before.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="gap-2 px-8">
              <Link href="/signup">
                Start for Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Everything you need to manage your properties
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful tools built for modern property owners and professionals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to take control of your property portfolio?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Join homeowners and property professionals who trust ThisIsOurMoney.
            </p>
            <Button size="lg" asChild className="gap-2">
              <Link href="/signup">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-primary" />
            <span className="font-medium">ThisIsOurMoney</span>
          </div>
          <p>© 2025 ThisIsOurMoney. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Building2,
  Archive,
  TrendingUp,
  Settings,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/shared/Logo'

const mainNav = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/properties', icon: Building2, label: 'Properties' },
  { href: '/vault', icon: Archive, label: 'Vault' },
  { href: '/forecast', icon: TrendingUp, label: 'Forecast' },
]

interface SidebarProps {
  onClose?: () => void
}

export function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      {/* Logo */}
      <div className="flex h-14 items-center justify-between px-4 border-b border-white/10">
        <Link href="/dashboard" aria-label="ThisIsMyProperty.com dashboard">
          <Logo variant="inverse" />
        </Link>
        {onClose && (
          <Button variant="ghost" size="icon" className="h-7 w-7 text-white/70 hover:bg-white/10 hover:text-white lg:hidden" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Main nav */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {mainNav.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`)
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-active text-white shadow-[inset_3px_0_0_hsl(var(--sidebar-accent))]'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Settings */}
      <div className="px-3 pb-4">
        <Separator className="mb-4 bg-white/10" />
        <Link
          href="/settings"
          onClick={onClose}
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
            pathname === '/settings'
              ? 'bg-sidebar-active text-white shadow-[inset_3px_0_0_hsl(var(--sidebar-accent))]'
              : 'text-white/70 hover:bg-white/5 hover:text-white'
          )}
        >
          <Settings className="h-4 w-4 shrink-0" />
          Settings
        </Link>
      </div>
    </div>
  )
}

import { cn } from '@/lib/utils'

interface LogoProps {
  /** `inverse` is for dark backgrounds such as the sidebar. */
  variant?: 'default' | 'inverse'
  showTagline?: boolean
  className?: string
}

export function Logo({ variant = 'default', showTagline = false, className }: LogoProps) {
  const inverse = variant === 'inverse'

  return (
    <span className={cn('flex items-center gap-2', className)}>
      <svg
        viewBox="0 0 48 44"
        aria-hidden="true"
        className={cn('h-8 w-8 shrink-0', inverse ? 'text-white' : 'text-navy')}
      >
        <path
          d="M24 4 6 17v3h4v20h28V20h4v-3L24 4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M11 30h7l3-7 4 13 3-8 2 2h7"
          fill="none"
          stroke="hsl(var(--teal))"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="20" y="10" width="8" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      <span className="leading-tight">
        <span
          className={cn(
            'block whitespace-nowrap text-sm font-bold tracking-tight',
            inverse ? 'text-white' : 'text-navy'
          )}
        >
          ThisIs<span className="text-teal">My</span>Property
          <span className={inverse ? 'text-white/60' : 'text-muted-foreground'}>.com</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              'hidden whitespace-nowrap text-[10px] italic sm:block',
              inverse ? 'text-white/60' : 'text-muted-foreground'
            )}
          >
            Your home&rsquo;s health at your fingertips.&trade;
          </span>
        )}
      </span>
    </span>
  )
}

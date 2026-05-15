import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import type { ForecastSummary } from '@/types'

// Quarterly distribution — seasonally weighted to show variation
const QUARTERS = [
  { label: '3 months', weight: 0.20 },
  { label: '6 months', weight: 0.30 },
  { label: '9 months', weight: 0.28 },
  { label: '12 months', weight: 0.22 },
]

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n}`
}

interface ForecastChartProps {
  summary: ForecastSummary
}

export function ForecastChart({ summary }: ForecastChartProps) {
  // Empty state — no properties or zero exposure
  if (summary.totalProperties === 0 || summary.totalEstimatedExposure === 0) {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">12-Month Maintenance Projection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-28 items-center justify-center rounded-lg border border-dashed border-border">
            <p className="text-xs text-muted-foreground">
              Add properties to generate a forecast chart
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const data = QUARTERS.map(q => ({
    label: q.label,
    amount: Math.round(summary.totalEstimatedExposure * q.weight),
  }))

  const maxAmount = Math.max(...data.map(d => d.amount))

  // ── SVG layout constants ────────────────────────────────────────────────
  const W = 480          // viewBox width
  const H = 164          // viewBox height
  const PT = 30          // padding top  (value labels above bars)
  const PB = 26          // padding bottom (x-axis labels)
  const chartH = H - PT - PB           // 108 — usable bar height
  const baseline = H - PB              // 138 — y of x-axis line
  const segW = W / QUARTERS.length     // 120 — width per bar slot
  const barW = 56
  const barInset = (segW - barW) / 2   // 32 — left margin within slot

  // Horizontal guide lines at 33 % and 66 % of chart height
  const guides = [0.33, 0.66].map(pct => baseline - pct * chartH)

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">12-Month Maintenance Projection</CardTitle>
        <CardDescription className="text-xs">
          Estimated quarterly spend across{' '}
          {summary.totalProperties} propert{summary.totalProperties === 1 ? 'y' : 'ies'}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full overflow-visible"
          role="img"
          aria-label="Quarterly maintenance cost projection"
        >
          <defs>
            <linearGradient id="fcBarGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="hsl(var(--primary))" stopOpacity="0.90" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
            </linearGradient>
          </defs>

          {/* Dashed guide lines */}
          {guides.map((y, i) => (
            <line
              key={i}
              x1={0}  y1={y}
              x2={W}  y2={y}
              stroke="hsl(var(--border))"
              strokeWidth={0.75}
              strokeDasharray="4 4"
            />
          ))}

          {/* X-axis baseline */}
          <line
            x1={0}  y1={baseline}
            x2={W}  y2={baseline}
            stroke="hsl(var(--border))"
            strokeWidth={1}
          />

          {/* Bars + labels */}
          {data.map((d, i) => {
            const barH  = maxAmount > 0 ? (d.amount / maxAmount) * chartH : 4
            const barX  = i * segW + barInset
            const barY  = baseline - barH
            const cx    = i * segW + segW / 2

            return (
              <g key={d.label}>
                <rect
                  x={barX}
                  y={barY}
                  width={barW}
                  height={barH}
                  rx={3}
                  fill="url(#fcBarGrad)"
                />

                {/* Amount above bar */}
                <text
                  x={cx}
                  y={barY - 5}
                  textAnchor="middle"
                  fill="hsl(var(--foreground))"
                  fontSize={10}
                  fontWeight={600}
                >
                  {fmt(d.amount)}
                </text>

                {/* Quarter label below axis */}
                <text
                  x={cx}
                  y={H - 7}
                  textAnchor="middle"
                  fill="hsl(var(--muted-foreground))"
                  fontSize={10}
                >
                  {d.label}
                </text>
              </g>
            )
          })}
        </svg>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-0.5">
          <p className="text-xs text-muted-foreground">Seasonally weighted · rule-based estimate</p>
          <p className="text-xs font-semibold tabular-nums">
            {fmt(summary.totalEstimatedExposure)}<span className="font-normal text-muted-foreground">/yr</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

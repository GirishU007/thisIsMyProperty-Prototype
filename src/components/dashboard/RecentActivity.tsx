import { Building2, FileText, Archive, Plus } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type ActivityItem = {
  id: string
  type: 'document' | 'property'
  title: string
  subtitle: string
  date: string
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export async function RecentActivity() {
  const supabase = await createClient()

  const [{ data: recentDocs }, { data: recentProperties }] = await Promise.all([
    supabase
      .from('documents')
      .select('id, file_name, category, created_at, property_id')
      .order('created_at', { ascending: false })
      .limit(5),
    supabase
      .from('properties')
      .select('id, address, property_type, created_at')
      .order('created_at', { ascending: false })
      .limit(5),
  ])

  const propertyIds = (recentDocs ?? []).map(d => d.property_id).filter(Boolean)
  let propertyMap: Record<string, string> = {}

  if (propertyIds.length > 0) {
    const { data: propData } = await supabase
      .from('properties')
      .select('id, address')
      .in('id', propertyIds)
    propertyMap = Object.fromEntries((propData ?? []).map(p => [p.id, p.address]))
  }

  const docItems: ActivityItem[] = (recentDocs ?? []).map(d => ({
    id: `doc-${d.id}`,
    type: 'document',
    title: d.file_name,
    subtitle: `${d.category} · ${propertyMap[d.property_id] ?? 'Unknown property'}`,
    date: d.created_at,
  }))

  const propItems: ActivityItem[] = (recentProperties ?? []).map(p => ({
    id: `prop-${p.id}`,
    type: 'property',
    title: p.address,
    subtitle: p.property_type,
    date: p.created_at,
  }))

  const feed = [...docItems, ...propItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)

  const hasProperties = (recentProperties ?? []).length > 0
  const hasDocuments = (recentDocs ?? []).length > 0

  return (
    <div>
      <h2 className="text-base font-semibold mb-4">Recent Activity</h2>

      {feed.length === 0 ? (
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <Archive className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">No recent activity</p>
              <p className="text-xs text-muted-foreground mt-1">
                Add a property or upload a document to get started.
              </p>
            </div>
            <div className="flex gap-2 mt-1">
              <Button size="sm" variant="outline" asChild>
                <Link href="/properties">
                  <Plus className="h-3.5 w-3.5 mr-1.5" />
                  Add Property
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href="/vault">
                  <Plus className="h-3.5 w-3.5 mr-1.5" />
                  Upload Document
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription>
                {hasProperties && !hasDocuments && 'No documents yet — '}
                {!hasProperties && hasDocuments && 'No properties yet — '}
                {feed.length} recent event{feed.length === 1 ? '' : 's'}
              </CardDescription>
              <div className="flex gap-2">
                {!hasProperties && (
                  <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" asChild>
                    <Link href="/properties">
                      <Plus className="h-3 w-3" />
                      Add property
                    </Link>
                  </Button>
                )}
                {!hasDocuments && (
                  <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" asChild>
                    <Link href="/vault">
                      <Plus className="h-3 w-3" />
                      Upload document
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="divide-y divide-border">
              {feed.map(item => (
                <li key={item.id} className="flex items-center gap-3 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                    {item.type === 'property' ? (
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate" title={item.title}>
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground capitalize truncate">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="outline" className="text-xs py-0 h-5 hidden sm:inline-flex">
                      {item.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{formatDate(item.date)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

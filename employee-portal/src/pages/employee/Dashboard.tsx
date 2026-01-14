import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { PageHeader } from '../../components/layout/PageHeader'
import { SkeletonCard } from '../../components/common/Skeleton'
import { employeeActivity, employeeSummary } from '../../mocks/employee'
import { cn } from '../../lib/cn'
import { ConstructionPlaceholder } from '../../components/common/ConstructionPlaceholder'

const accentStyles: Record<string, string> = {
  orange: 'bg-orange-500',
  green: 'bg-emerald-500',
  red: 'bg-rose-500',
  blue: 'bg-blue-500',
}

export const EmployeeDashboard = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Welcome back! Track site requests, safety updates, and weekly progress."
        action={
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary">New Site Request</Button>
            <Button>Submit Weekly Report</Button>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : employeeSummary.map((card) => (
              <Card key={card.label}>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">
                    {card.label}
                  </p>
                  <span
                    className={cn(
                      'h-3 w-3 rounded-full',
                      accentStyles[card.accent],
                    )}
                  >
                    <span className="sr-only">{card.accent}</span>
                  </span>
                </div>
                <p className="mt-3 text-2xl font-semibold text-slate-900">
                  {card.value}
                </p>
                <p className="mt-2 text-xs text-slate-500">{card.detail}</p>
              </Card>
            ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card
          title="Recent Activity"
          description="Latest submissions and approvals."
          action={
            <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600">
              View all <ArrowUpRight size={16} />
            </button>
          }
        >
          <div className="space-y-4">
            {employeeActivity.map((item) => (
              <div
                key={item.title}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={
                      item.status === 'Approved'
                        ? 'approved'
                        : item.status === 'Rejected'
                          ? 'rejected'
                          : 'pending'
                    }
                  >
                    {item.status}
                  </Badge>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Quick Actions" description="Start something new today.">
          <div className="space-y-3">
            <Button className="w-full justify-between">
              New Site Request
              <ArrowUpRight size={16} />
            </Button>
            <Button variant="secondary" className="w-full justify-between">
              Submit Weekly Report
              <ArrowUpRight size={16} />
            </Button>
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
              Tip: Track request status in real-time from the Status tab.
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Site Requests Trend" description="Last 6 weeks overview.">
          <ConstructionPlaceholder
            className="h-48"
            title="Weekly request volume"
            description="Line chart placeholder"
          />
        </Card>
        <Card title="Safety Checklist Progress">
          <ConstructionPlaceholder
            className="h-48"
            title="Checklist completion"
            description="Bar chart placeholder"
          />
        </Card>
      </div>
    </div>
  )
}

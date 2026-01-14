import { AlertTriangle } from 'lucide-react'
import { Card } from '../../components/ui/Card'
import { PageHeader } from '../../components/layout/PageHeader'
import { adminAlerts, adminKpis } from '../../mocks/admin'
import { ConstructionPlaceholder } from '../../components/common/ConstructionPlaceholder'

export const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Admin Dashboard"
        description="Overview of site requests, budgets, and project reporting."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminKpis.map((kpi) => (
          <Card key={kpi.label}>
            <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">
              {kpi.value}
            </p>
            <p className="mt-2 text-xs text-slate-500">{kpi.detail}</p>
          </Card>
        ))}
      </div>

      <Card
        title="Site Alerts"
        description="Pending approvals and on-site escalations."
      >
        <div className="space-y-4">
          {adminAlerts.map((alert) => (
            <div
              key={alert.title}
              className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
            >
              <AlertTriangle size={18} />
              <div>
                <p className="font-semibold">{alert.title}</p>
                <p className="text-xs text-amber-700">{alert.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Budget Burn Rate" description="Monthly cost curve">
          <ConstructionPlaceholder
            className="h-48"
            title="Cost trend"
            description="Chart placeholder"
          />
        </Card>
        <Card title="Workforce Allocation">
          <ConstructionPlaceholder
            className="h-48"
            title="Crew distribution"
            description="Chart placeholder"
          />
        </Card>
      </div>
    </div>
  )
}

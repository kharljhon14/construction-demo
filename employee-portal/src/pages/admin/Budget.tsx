import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageHeader } from '../../components/layout/PageHeader'
import { adminBudgets } from '../../mocks/admin'
import { ConstructionPlaceholder } from '../../components/common/ConstructionPlaceholder'

export const AdminBudget = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Site Budget Monitoring"
        description="Track budget usage across active construction sites."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Total Site Budget" description="Across active projects">
          <p className="text-2xl font-semibold text-slate-900">₱1.25M</p>
          <p className="mt-2 text-xs text-slate-500">₱826K spent • 65% used</p>
        </Card>
        <Card title="Upcoming Payments" description="Next 14 days">
          <p className="text-2xl font-semibold text-slate-900">₱138K</p>
          <p className="mt-2 text-xs text-slate-500">Vendors + subcontractors</p>
        </Card>
        <Card title="Variance" description="Planned vs actual">
          <p className="text-2xl font-semibold text-emerald-600">-4.2%</p>
          <p className="mt-2 text-xs text-slate-500">Below forecast baseline</p>
        </Card>
      </div>

      <div className="space-y-4">
        {adminBudgets.map((project) => {
          const percentage = Math.round((project.spent / project.budget) * 100)
          return (
            <Card
              key={project.id}
              title={project.name}
              description={`${project.location} • Phase: ${project.phase}`}
              action={
                <Link to={`/admin/budget/${project.id}`}>
                  <Button variant="ghost" size="sm">
                    View details <ArrowUpRight size={14} />
                  </Button>
                </Link>
              }
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="rounded-full bg-slate-100 px-2 py-1">
                  Manager: {project.manager}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-1">
                  Timeline: {project.start} - {project.end}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-1">
                  Tasks: {project.tasks}
                </span>
              </div>

              <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-teal-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                ₱{project.spent.toLocaleString()} spent of ₱{project.budget.toLocaleString()} ({percentage}%)
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr_1fr]">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-500">
                    Spend categories
                  </p>
                  {project.spendCategories.map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-semibold text-slate-900">
                        ₱{item.value.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
                <ConstructionPlaceholder
                  className="h-28"
                  title="Cost trend"
                  description="Monthly spend chart"
                />
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

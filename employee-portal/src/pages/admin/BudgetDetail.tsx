import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../../components/ui/Table'
import { PageHeader } from '../../components/layout/PageHeader'
import { adminBudgets, adminTransactions } from '../../mocks/admin'
import { Card } from '../../components/ui/Card'
import { ConstructionPlaceholder } from '../../components/common/ConstructionPlaceholder'

export const AdminBudgetDetail = () => {
  const { projectId } = useParams()
  const project = adminBudgets.find((item) => item.id === projectId)
  const remaining = project ? project.budget - project.spent : 0
  const usage = project ? Math.round((project.spent / project.budget) * 100) : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link to="/admin/budget">
          <Button variant="ghost" size="sm">
            <ArrowLeft size={16} />
          </Button>
        </Link>
        <PageHeader
          title={project?.name ?? 'Site Budget Detail'}
          description="Budget summary, allocations, and recent transactions."
        />
      </div>

      {project && (
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Total Budget" description={project.location}>
            <p className="text-2xl font-semibold text-slate-900">
              ₱{project.budget.toLocaleString()}
            </p>
            <p className="mt-2 text-xs text-slate-500">Phase: {project.phase}</p>
          </Card>
          <Card title="Spent to Date" description={`${usage}% used`}>
            <p className="text-2xl font-semibold text-slate-900">
              ₱{project.spent.toLocaleString()}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Remaining ₱{remaining.toLocaleString()}
            </p>
          </Card>
          <Card title="Forecast Variance" description="Planned vs actual">
            <p className="text-2xl font-semibold text-emerald-600">-3.1%</p>
            <p className="mt-2 text-xs text-slate-500">
              Based on current spend trend
            </p>
          </Card>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card title="Spend Trend">
          <ConstructionPlaceholder
            className="h-48"
            title="Monthly cost trend"
            description="Chart placeholder"
          />
        </Card>
        <Card title="Allocations">
          <div className="space-y-3 text-xs text-slate-500">
            {project?.spendCategories.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-semibold text-slate-900">
                  ₱{item.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Transaction</TableHeaderCell>
            <TableHeaderCell>Vendor</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminTransactions.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-semibold text-slate-900">
                {item.id}
              </TableCell>
              <TableCell>{item.vendor}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageHeader } from '../../components/layout/PageHeader'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../../components/ui/Table'
import { timesheets } from '../../mocks/operations'

export const AdminTimesheets = () => {
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2000)
    return () => clearTimeout(timer)
  }, [toast])

  return (
    <div className="space-y-6">
      <PageHeader
        title="Timesheets"
        description="Review weekly timesheets, punches, and export payroll summaries."
        action={
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={() => setToast('CSV export started')}>
              Export CSV
            </Button>
            <Button onClick={() => setToast('PDF export started')}>Export PDF</Button>
          </div>
        }
      />

      <Card title="Weekly Summary" description="Jan 12 - Jan 18, 2026">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm">
            <p className="text-xs text-slate-500">Total hours</p>
            <p className="text-xl font-semibold text-slate-900">128h</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm">
            <p className="text-xs text-slate-500">Overtime hours</p>
            <p className="text-xl font-semibold text-slate-900">8h</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm">
            <p className="text-xs text-slate-500">Pending approvals</p>
            <p className="text-xl font-semibold text-slate-900">2</p>
          </div>
        </div>
      </Card>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Crew Member</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Site</TableHeaderCell>
            <TableHeaderCell>Week</TableHeaderCell>
            <TableHeaderCell>Hours</TableHeaderCell>
            <TableHeaderCell>Overtime</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Entries</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timesheets.map((sheet) => (
            <TableRow key={sheet.id}>
              <TableCell className="font-semibold text-slate-900">
                {sheet.employee}
              </TableCell>
              <TableCell>{sheet.role}</TableCell>
              <TableCell>{sheet.site}</TableCell>
              <TableCell>{sheet.week}</TableCell>
              <TableCell>{sheet.hours}h</TableCell>
              <TableCell>{sheet.overtime}h</TableCell>
              <TableCell>
                <Badge
                  variant={
                    sheet.status === 'Approved'
                      ? 'approved'
                      : sheet.status === 'Submitted' || sheet.status === 'Pending'
                        ? 'pending'
                        : 'rejected'
                  }
                >
                  {sheet.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Link to={`/admin/timesheets/${sheet.id}`}>
                  <Button variant="ghost" size="sm">
                    View punches
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {toast && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
          {toast}
        </div>
      )}
    </div>
  )
}

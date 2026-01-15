import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
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

const statusVariant = (status: string) => {
  if (status === 'Approved') return 'approved'
  if (status === 'Submitted' || status === 'Pending') return 'pending'
  return 'rejected'
}

export const AdminTimesheetDetail = () => {
  const { id } = useParams()
  const sheet = timesheets.find((item) => item.id === id)

  if (!sheet) {
    return (
      <div className="space-y-4">
        <PageHeader title="Timesheet not found" />
        <Link to="/admin/timesheets">
          <Button variant="secondary">Back to timesheets</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/admin/timesheets">
            <Button variant="ghost" size="sm">
              <ArrowLeft size={16} />
            </Button>
          </Link>
          <PageHeader
            title={`${sheet.employee} punches`}
            description={`${sheet.site} • ${sheet.week}`}
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={statusVariant(sheet.status)}>{sheet.status}</Badge>
          <Badge variant="neutral">{sheet.hours}h total</Badge>
          <Badge variant="neutral">{sheet.overtime}h overtime</Badge>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Timesheet Summary">
          <div className="grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <p className="text-xs text-slate-500">Timesheet ID</p>
              <p className="font-semibold text-slate-900">{sheet.id}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Role</p>
              <p className="font-semibold text-slate-900">{sheet.role}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Week</p>
              <p className="font-semibold text-slate-900">{sheet.week}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Assigned site</p>
              <p className="font-semibold text-slate-900">{sheet.site}</p>
            </div>
          </div>
        </Card>

        <Card title="Geolocation">
          <p className="text-sm text-slate-600">
            Each punch logs the capture point so admins can verify on-site
            attendance.
          </p>
          <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-500">
            Coordinates are stored with time in and time out entries.
          </div>
        </Card>
      </div>

      <Card title="Punches" description="Individual time in/out entries with locations.">
        {sheet.entries?.length ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Time in date</TableHeaderCell>
                <TableHeaderCell>Time in</TableHeaderCell>
                <TableHeaderCell>In location</TableHeaderCell>
                <TableHeaderCell>Time out date</TableHeaderCell>
                <TableHeaderCell>Time out</TableHeaderCell>
                <TableHeaderCell>Out location</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sheet.entries.map((entry) => (
                <TableRow key={`${sheet.id}-${entry.date}`}>
                  <TableCell className="font-semibold text-slate-900">
                    {entry.date}
                  </TableCell>
                  <TableCell>{entry.timeIn.time}</TableCell>
                  <TableCell>
                    <div className="text-sm text-slate-700">
                      {entry.timeIn.location}
                    </div>
                    <div className="text-xs text-slate-400">
                      {entry.timeIn.coords}
                    </div>
                  </TableCell>
                  <TableCell>{entry.timeOut.date}</TableCell>
                  <TableCell>{entry.timeOut.time}</TableCell>
                  <TableCell>
                    <div className="text-sm text-slate-700">
                      {entry.timeOut.location}
                    </div>
                    <div className="text-xs text-slate-400">
                      {entry.timeOut.coords}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
            No punch entries are available for this timesheet yet.
          </div>
        )}
      </Card>
    </div>
  )
}

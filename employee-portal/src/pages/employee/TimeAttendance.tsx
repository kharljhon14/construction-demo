import { useState } from 'react'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageHeader } from '../../components/layout/PageHeader'
import { ConstructionPlaceholder } from '../../components/common/ConstructionPlaceholder'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../../components/ui/Table'

const logs = [
  { date: 'Jan 14, 2026', in: '8:58 AM', out: '6:04 PM', status: 'On time' },
  { date: 'Jan 13, 2026', in: '9:12 AM', out: '6:01 PM', status: 'Late' },
  { date: 'Jan 12, 2026', in: '8:49 AM', out: '6:10 PM', status: 'On time' },
]

export const EmployeeTimeAttendance = () => {
  const [timedIn, setTimedIn] = useState(true)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Time In & Out"
        description="Track your daily site attendance and shift hours."
        action={
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={timedIn ? 'approved' : 'pending'}>
              {timedIn ? 'Timed in' : 'Not timed in'}
            </Badge>
            <Button variant="secondary">Request adjustment</Button>
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Today's Shift" description="Wednesday, Jan 15 • 9:00 AM - 6:00 PM">
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Current status</p>
              <p className="text-lg font-semibold text-slate-900">
                {timedIn ? 'Clocked in' : 'Not started'}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Hours tracked</p>
              <p className="text-lg font-semibold text-slate-900">6h 12m</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Breaks</p>
              <p className="text-lg font-semibold text-slate-900">45m</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => setTimedIn(true)}>Time in</Button>
            <Button variant="secondary" onClick={() => setTimedIn(false)}>
              Time out
            </Button>
            <Button variant="ghost">Start break</Button>
          </div>
        </Card>

        <Card title="Quick Insights">
          <div className="space-y-4 text-sm text-slate-600">
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Weekly total</p>
              <p className="text-xl font-semibold text-slate-900">38h 24m</p>
              <p className="text-xs text-slate-500">Target: 40h</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Late arrivals</p>
              <p className="text-xl font-semibold text-slate-900">1 day</p>
              <p className="text-xs text-slate-500">Last week: 0</p>
            </div>
            <ConstructionPlaceholder
              className="h-28"
              title="Hours trend"
              description="Attendance chart"
            />
          </div>
        </Card>
      </div>

      <Card title="Recent Logs" description="Attendance for the last 7 days.">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Time in</TableHeaderCell>
              <TableHeaderCell>Time out</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.date}>
                <TableCell className="font-semibold text-slate-900">
                  {log.date}
                </TableCell>
                <TableCell>{log.in}</TableCell>
                <TableCell>{log.out}</TableCell>
                <TableCell>
                  <Badge variant={log.status === 'On time' ? 'approved' : 'pending'}>
                    {log.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

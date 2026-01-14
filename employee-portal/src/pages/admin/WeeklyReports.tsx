import { useState } from 'react'
import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../../components/ui/Table'
import { PageHeader } from '../../components/layout/PageHeader'
import { adminWeeklyReports } from '../../mocks/admin'
import { ConstructionPlaceholder } from '../../components/common/ConstructionPlaceholder'

export const AdminWeeklyReports = () => {
  const [selected, setSelected] = useState(adminWeeklyReports[0])

  return (
    <div className="space-y-6">
      <PageHeader
        title="Review Site Reports"
        description="Inspect progress updates and supporting details."
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Crew Member</TableHeaderCell>
              <TableHeaderCell>Project</TableHeaderCell>
              <TableHeaderCell>Week</TableHeaderCell>
              <TableHeaderCell>% Accomplishment</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminWeeklyReports.map((report) => (
              <TableRow
                key={report.id}
                className="cursor-pointer hover:bg-slate-50"
                onClick={() => setSelected(report)}
              >
                <TableCell className="font-semibold text-slate-900">
                  {report.employee}
                </TableCell>
                <TableCell>{report.project}</TableCell>
                <TableCell>{report.week}</TableCell>
                <TableCell>{report.progress}%</TableCell>
                <TableCell>
                  <Badge
                    variant={report.status === 'Approved' ? 'approved' : 'pending'}
                  >
                    {report.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Card title="Report Detail" description="Selected report preview.">
          {selected ? (
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <p className="text-xs text-slate-500">Crew Member</p>
                <p className="font-semibold text-slate-900">
                  {selected.employee}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Notes</p>
                <p>{selected.notes}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Milestone accomplishments</p>
                <div className="mt-2 space-y-2">
                  {[
                    'Concrete pour completed for Level 3',
                    'Safety inspection cleared',
                    'Facade mock-up approved',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-slate-100 bg-white px-3 py-2 text-xs text-slate-600"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500">Progress trend</p>
                <ConstructionPlaceholder
                  className="mt-2 h-28"
                  title="Trend view"
                  description="Analytics coming soon."
                />
              </div>
              <div>
                <p className="text-xs text-slate-500">Photos</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {selected.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${selected.project} photo ${index + 1}`}
                      className="h-20 w-full rounded-xl object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500">
              Select a report to see details.
            </p>
          )}
        </Card>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { EmptyState } from '../../components/common/EmptyState'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { Tabs } from '../../components/ui/Tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../../components/ui/Table'
import { PageHeader } from '../../components/layout/PageHeader'
import { employeeReports } from '../../mocks/employee'

export const EmployeeReports = () => {
  const [tab, setTab] = useState('active')

  return (
    <div className="space-y-6">
      <PageHeader
        title="Site Reports"
        description="Browse weekly site submissions and details."
      />

      <Tabs
        tabs={[
          { label: 'Active Reports', value: 'active', badge: '3' },
          { label: 'Archived', value: 'archived' },
        ]}
        value={tab}
        onChange={setTab}
      />

      <div className="grid gap-4 md:grid-cols-5">
        <Input label="Start date" type="date" />
        <Input label="End date" type="date" />
        <Select label="Project">
          <option>All projects</option>
          <option>Skyline Tower</option>
          <option>Harbor Residences</option>
          <option>Metro Warehouse</option>
        </Select>
        <Select label="Status">
          <option>All status</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
        </Select>
        <Button className="self-end" variant="secondary">
          Apply filters
        </Button>
      </div>

      {tab === 'archived' ? (
        <EmptyState
          title="No archived reports"
          description="Archived reports will appear here when available."
          actionLabel="Back to active reports"
          onAction={() => setTab('active')}
        />
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Report</TableHeaderCell>
              <TableHeaderCell>Project</TableHeaderCell>
              <TableHeaderCell>Week Ending</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Progress</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeReports.map((report) => (
              <TableRow key={report.id} className="hover:bg-slate-50">
                <TableCell className="font-semibold text-slate-900">
                  {report.id.toUpperCase()}
                </TableCell>
                <TableCell>{report.project}</TableCell>
                <TableCell>{report.week}</TableCell>
                <TableCell>
                  <Badge
                    variant={report.status === 'Approved' ? 'approved' : 'pending'}
                  >
                    {report.status}
                  </Badge>
                </TableCell>
                <TableCell>{report.progress}%</TableCell>
                <TableCell>
                  <Link to={`/employee/reports/${report.id}`}>
                    <Button variant="ghost" size="sm">
                      View details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}

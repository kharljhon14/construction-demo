import { useState } from 'react'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
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
import {
  employeeStatusReports,
  employeeStatusRequests,
} from '../../mocks/employee'

const filters = ['All', 'Pending', 'Approved', 'Rejected']

export const EmployeeStatus = () => {
  const [activeTab, setActiveTab] = useState('requests')
  const [activeFilter, setActiveFilter] = useState('All')

  const rows =
    activeTab === 'requests' ? employeeStatusRequests : employeeStatusReports

  return (
    <div className="space-y-6">
      <PageHeader
        title="Track Status"
        description="Monitor your site requests and weekly reports."
      />

      <Tabs
        tabs={[
          { label: 'Requests', value: 'requests' },
          { label: 'Reports', value: 'reports' },
        ]}
        value={activeTab}
        onChange={setActiveTab}
      />

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Submitted Date</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Last Updated</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-semibold text-slate-900">
                {row.id}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.submitted}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    row.status === 'Approved'
                      ? 'approved'
                      : row.status === 'Rejected'
                        ? 'rejected'
                        : 'pending'
                  }
                >
                  {row.status}
                </Badge>
              </TableCell>
              <TableCell>{row.updated}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

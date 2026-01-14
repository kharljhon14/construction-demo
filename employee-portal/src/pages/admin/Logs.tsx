import { Badge } from '../../components/ui/Badge'
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
import { adminLogs } from '../../mocks/operations'

const badgeMap: Record<string, 'approved' | 'pending' | 'neutral'> = {
  Approval: 'approved',
  Budget: 'neutral',
  Safety: 'pending',
  Payroll: 'neutral',
}

export const AdminLogs = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Admin Logs"
        description="Audit trail of approvals, payroll actions, and site updates."
      />

      <Card title="Latest Activity">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Action</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>By</TableHeaderCell>
              <TableHeaderCell>Time</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="font-semibold text-slate-900">
                  {log.action}
                </TableCell>
                <TableCell>
                  <Badge variant={badgeMap[log.type] ?? 'neutral'}>
                    {log.type}
                  </Badge>
                </TableCell>
                <TableCell>{log.by}</TableCell>
                <TableCell>{log.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

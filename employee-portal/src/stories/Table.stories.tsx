import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../components/ui/Table'
import { Badge } from '../components/ui/Badge'

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Updated</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell className="font-semibold text-slate-900">REQ-1043</TableCell>
          <TableCell>Petty Cash</TableCell>
          <TableCell>
            <Badge variant="pending">Pending</Badge>
          </TableCell>
          <TableCell>2 hours ago</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold text-slate-900">REQ-1039</TableCell>
          <TableCell>Leave</TableCell>
          <TableCell>
            <Badge variant="approved">Approved</Badge>
          </TableCell>
          <TableCell>Yesterday</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

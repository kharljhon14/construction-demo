import { useState } from 'react'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Drawer } from '../../components/ui/Drawer'
import { Textarea } from '../../components/ui/Textarea'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../../components/ui/Table'
import { PageHeader } from '../../components/layout/PageHeader'
import { adminRequests } from '../../mocks/admin'

export const AdminRequests = () => {
  const [open, setOpen] = useState(false)
  const [activeRequest, setActiveRequest] = useState(adminRequests[0])

  const handleOpen = (requestId: string) => {
    const request = adminRequests.find((item) => item.id === requestId)
    if (request) {
      setActiveRequest(request)
      setOpen(true)
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Review Site Requests"
        description="Inspect, approve, or reject pending site requests."
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Crew Member</TableHeaderCell>
            <TableHeaderCell>Request Type</TableHeaderCell>
            <TableHeaderCell>Amount/Dates</TableHeaderCell>
            <TableHeaderCell>Submitted Date</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell className="font-semibold text-slate-900">
                {request.employee}
              </TableCell>
              <TableCell>{request.type}</TableCell>
              <TableCell>{request.amount}</TableCell>
              <TableCell>{request.date}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    request.status === 'Approved'
                      ? 'approved'
                      : request.status === 'Rejected'
                        ? 'rejected'
                        : 'pending'
                  }
                >
                  {request.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleOpen(request.id)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title={`Request ${activeRequest?.id ?? ''}`}
      >
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              {activeRequest?.employee}
            </p>
            <p className="text-xs">
              {activeRequest?.type} • {activeRequest?.amount}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Attachments
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex h-20 items-center justify-center rounded-lg border border-dashed border-slate-200 bg-white text-xs text-slate-400"
                >
                  PDF {index + 1}
                </div>
              ))}
            </div>
          </div>

          <Textarea
            label="Comment"
            placeholder="Add a quick note for the employee."
          />

          <div className="flex gap-2">
            <Button variant="secondary" className="flex-1">
              Approve
            </Button>
            <Button variant="danger" className="flex-1">
              Reject
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

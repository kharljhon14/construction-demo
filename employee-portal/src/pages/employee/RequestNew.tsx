import { Paperclip } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { Tabs } from '../../components/ui/Tabs'
import { Textarea } from '../../components/ui/Textarea'
import { PageHeader } from '../../components/layout/PageHeader'

export const EmployeeRequestNew = () => {
  const [tab, setTab] = useState('petty-cash')

  return (
    <div className="space-y-6">
      <PageHeader
        title="Submit Site Request"
        description="Submit site expense, materials, or leave requests with supporting details."
      />

      <Tabs
        tabs={[
          { label: 'Petty Cash', value: 'petty-cash' },
          { label: 'Leave', value: 'leave' },
        ]}
        value={tab}
        onChange={setTab}
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Request Details" description="Complete the form below.">
          <div className="grid gap-4 md:grid-cols-2">
            <Select label="Request type">
              <option>Petty Cash Reimbursement</option>
              <option>Travel Expense</option>
              <option>Payment of Materials</option>
              <option>Equipment Rental</option>
              <option>Site Allowance</option>
              <option>Medical Allowance</option>
              <option>Annual Leave</option>
              <option>Sick Leave</option>
            </Select>
            {tab === 'petty-cash' ? (
              <Input label="Amount (PHP)" type="number" placeholder="2500" />
            ) : (
              <div className="grid gap-4 md:grid-cols-2 md:col-span-2">
                <Input label="Start date" type="date" />
                <Input label="End date" type="date" />
              </div>
            )}
            <Textarea
              label="Reason"
              placeholder="Add a short justification for the request."
              className="md:col-span-2"
            />
            <div className="md:col-span-2">
              <label className="flex flex-col gap-2 text-sm text-slate-700">
                <span className="font-medium text-slate-900">Attachments</span>
                <div className="flex items-center justify-between rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
                  <span className="flex items-center gap-2">
                    <Paperclip size={16} /> Drag receipts or PDF files here
                  </span>
                  <Button variant="secondary" size="sm">
                    Upload
                  </Button>
                </div>
              </label>
            </div>
          </div>
          <Button className="mt-6">Submit request</Button>
        </Card>

        <Card
          title="Policy Tips"
          description="Quick reminders before you submit."
        >
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="rounded-lg bg-slate-50 px-3 py-2">
              Requests are reviewed within 48 hours.
            </li>
            <li className="rounded-lg bg-slate-50 px-3 py-2">
              Materials payments need supplier receipts or delivery notes.
            </li>
            <li className="rounded-lg bg-slate-50 px-3 py-2">
              Attach invoices for petty cash over ₱1,500.
            </li>
            <li className="rounded-lg bg-slate-50 px-3 py-2">
              Leave requests require supervisor approval first.
            </li>
          </ul>
          <div className="mt-6 rounded-xl border border-slate-100 bg-blue-50 px-4 py-3 text-xs text-blue-700">
            Step 1: Submit → Step 2: Supervisor review → Step 3: Site office approval
          </div>
        </Card>
      </div>
    </div>
  )
}

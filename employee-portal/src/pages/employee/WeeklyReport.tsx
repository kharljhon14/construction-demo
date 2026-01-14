import { ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { Textarea } from '../../components/ui/Textarea'
import { PageHeader } from '../../components/layout/PageHeader'
import { cn } from '../../lib/cn'

export const EmployeeWeeklyReport = () => {
  const [progress, setProgress] = useState(72)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Weekly Site Report"
        description="Share site highlights, milestones, and progress for the week."
      />

      <Card title="Report Details">
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Week ending" type="date" />
          <Select label="Project">
            <option>Skyline Tower</option>
            <option>Harbor Residences</option>
            <option>Metro Warehouse</option>
          </Select>
          <Textarea
            label="Tasks and notes"
            placeholder="Summarize the key work completed, blockers, and next steps."
            className="md:col-span-2"
          />
          <Textarea
            label="Milestone accomplishments"
            placeholder="List completed milestones, inspections, or handoffs this week."
            className="md:col-span-2"
          />
          <div className="md:col-span-2">
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              <span className="font-medium text-slate-900">Upload photos</span>
              <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-xs text-slate-500">
                <ImageIcon size={20} />
                Drag and drop images or click to browse
                <Button variant="secondary" size="sm">
                  Upload photos
                </Button>
              </div>
            </label>
          </div>
          <div className="md:col-span-2">
            <Input
              label="% accomplishment"
              type="number"
              value={progress}
              min={0}
              max={100}
              onChange={(event) => setProgress(Number(event.target.value))}
            />
            <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
              <div
                className={cn('h-2 rounded-full bg-teal-500')}
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        </div>
        <Button className="mt-6">Submit report</Button>
      </Card>
    </div>
  )
}

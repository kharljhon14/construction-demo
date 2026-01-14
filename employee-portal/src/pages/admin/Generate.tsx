import { useEffect, useState } from 'react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { PageHeader } from '../../components/layout/PageHeader'

export const AdminGenerate = () => {
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2000)
    return () => clearTimeout(timer)
  }, [toast])

  const triggerToast = (label: string) => {
    setToast(`${label} export started`)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Generate Reports"
        description="Configure and export summarized insights."
      />

      <Card title="Export Controls">
        <div className="grid gap-4 md:grid-cols-2">
          <Select label="Report type">
            <option>Weekly Site Reports Summary</option>
            <option>Site Request Approvals</option>
            <option>Budget Utilization</option>
          </Select>
          <Select label="Project">
            <option>All projects</option>
            <option>Skyline Tower</option>
            <option>Harbor Residences</option>
          </Select>
          <Input label="Start date" type="date" />
          <Input label="End date" type="date" />
          <Select label="Export format" className="md:col-span-2">
            <option>PDF</option>
            <option>CSV</option>
            <option>XLSX</option>
          </Select>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => triggerToast('PDF')}>Export PDF</Button>
          <Button variant="secondary" onClick={() => triggerToast('CSV')}>
            Export CSV
          </Button>
        </div>
        {toast && (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
            {toast}
          </div>
        )}
      </Card>
    </div>
  )
}

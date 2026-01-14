import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { PageHeader } from '../../components/layout/PageHeader'
import { employeeReports } from '../../mocks/employee'
import { ConstructionPlaceholder } from '../../components/common/ConstructionPlaceholder'

export const EmployeeReportDetail = () => {
  const { id } = useParams()
  const report = employeeReports.find((item) => item.id === id)

  if (!report) {
    return (
      <div className="space-y-4">
        <PageHeader title="Report not found" />
        <Link to="/employee/reports">
          <Button variant="secondary">Back to reports</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/employee/reports">
            <Button variant="ghost" size="sm">
              <ArrowLeft size={16} />
            </Button>
          </Link>
          <PageHeader
            title={`Report ${report.id.toUpperCase()}`}
            description={`${report.project} • Week ending ${report.week}`}
          />
        </div>
        <Badge variant={report.status === 'Approved' ? 'approved' : 'pending'}>
          {report.status}
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Progress Overview">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Weekly site accomplishment</p>
            <span className="text-2xl font-semibold text-slate-900">
              {report.progress}%
            </span>
          </div>
          <div className="mt-4">
            <ConstructionPlaceholder
              className="h-40"
              title="Progress visualization"
              description="Interactive charts will appear here."
            />
          </div>
        </Card>

        <Card title="Notes">
          <p className="text-sm text-slate-600">{report.notes}</p>
        </Card>
      </div>

      <Card title="Photos Gallery">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {report.photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50"
            >
              <img
                src={photo}
                alt={`Report ${report.id} photo ${index + 1}`}
                className="h-36 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

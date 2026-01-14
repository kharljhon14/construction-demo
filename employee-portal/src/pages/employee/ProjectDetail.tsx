import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageHeader } from '../../components/layout/PageHeader'
import { ConstructionPlaceholder } from '../../components/common/ConstructionPlaceholder'
import { projectDetails } from '../../mocks/projects'

export const EmployeeProjectDetail = () => {
  const { id } = useParams()
  const project = projectDetails.find((item) => item.id === id)

  if (!project) {
    return (
      <div className="space-y-4">
        <PageHeader title="Project not found" />
        <Link to="/employee/projects">
          <Button variant="secondary">Back to projects</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/employee/projects">
            <Button variant="ghost" size="sm">
              <ArrowLeft size={16} />
            </Button>
          </Link>
          <PageHeader
            title={project.name}
            description={`${project.location} • Phase: ${project.phase}`}
          />
        </div>
        <Badge variant={project.status === 'Active' ? 'approved' : 'pending'}>
          {project.status}
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Project Overview" description={project.client}>
          <p className="text-sm text-slate-600">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-slate-100 px-2 py-1">
              Timeline: {project.start} - {project.end}
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-1">
              Total budget: ₱{project.totalBudget.toLocaleString()}
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-1">
              Spent: ₱{project.budgetSpent.toLocaleString()}
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-1">
              Tasks: {project.tasksTotal}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-slate-500">Progress</p>
            <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-blue-600"
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">
              {project.progress}% complete
            </p>
          </div>
        </Card>

        <Card title="Client Contact">
          <p className="text-sm font-semibold text-slate-900">
            {project.contact.name}
          </p>
          <p className="text-xs text-slate-500">{project.contact.role}</p>
          <div className="mt-3 text-xs text-slate-600">
            <p>{project.contact.email}</p>
            <p>{project.contact.phone}</p>
          </div>
          <div className="mt-4">
            <Button size="sm" variant="secondary">
              Message client
            </Button>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card title="Key Documents">
          <div className="grid gap-3 sm:grid-cols-2">
            {project.documents.map((doc) => (
              <div
                key={doc.name}
                className="rounded-xl border border-slate-100 bg-white px-3 py-2 text-xs text-slate-600"
              >
                <p className="font-semibold text-slate-900">{doc.name}</p>
                <p className="text-slate-500">{doc.type}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Team Members">
          <div className="flex flex-wrap gap-2">
            {project.team.map((member) => (
              <span
                key={member}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
              >
                {member}
              </span>
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Assigned by the site supervisor.
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Progress Trend">
          <ConstructionPlaceholder
            className="h-48"
            title="Milestone velocity"
            description="Chart placeholder"
          />
        </Card>
        <Card title="Site Risks">
          <ConstructionPlaceholder
            className="h-48"
            title="Risk heatmap"
            description="Chart placeholder"
          />
        </Card>
      </div>
    </div>
  )
}

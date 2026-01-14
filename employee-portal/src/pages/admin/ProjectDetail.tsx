import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { Textarea } from '../../components/ui/Textarea'
import { PageHeader } from '../../components/layout/PageHeader'
import { ConstructionPlaceholder } from '../../components/common/ConstructionPlaceholder'
import { projectDetails, type ProjectDetail } from '../../mocks/projects'

export const AdminProjectDetail = () => {
  const { id } = useParams()
  const project = projectDetails.find((item) => item.id === id)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState<ProjectDetail | null>(() => project ?? null)

  if (!project || !draft) {
    return (
      <div className="space-y-4">
        <PageHeader title="Project not found" />
        <Link to="/admin/projects">
          <Button variant="secondary">Back to projects</Button>
        </Link>
      </div>
    )
  }

  const remaining = draft.totalBudget - draft.budgetSpent

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/admin/projects">
            <Button variant="ghost" size="sm">
              <ArrowLeft size={16} />
            </Button>
          </Link>
          <PageHeader
            title={draft.name}
            description={`${draft.location} • Phase: ${draft.phase}`}
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={draft.status === 'Active' ? 'approved' : 'pending'}>
            {draft.status}
          </Badge>
          <Button
            variant="secondary"
            onClick={() => setEditing((prev) => !prev)}
          >
            {editing ? 'Cancel edit' : 'Edit project'}
          </Button>
          {editing && <Button onClick={() => setEditing(false)}>Save changes</Button>}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Project Overview" description={draft.client}>
          {editing ? (
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="Project name"
                value={draft.name}
                onChange={(event) =>
                  setDraft({ ...draft, name: event.target.value })
                }
              />
              <Input
                label="Client"
                value={draft.client}
                onChange={(event) =>
                  setDraft({ ...draft, client: event.target.value })
                }
              />
              <Input
                label="Location"
                value={draft.location}
                onChange={(event) =>
                  setDraft({ ...draft, location: event.target.value })
                }
              />
              <Select
                label="Phase"
                value={draft.phase}
                onChange={(event) =>
                  setDraft({ ...draft, phase: event.target.value })
                }
              >
                <option>Planning</option>
                <option>Structural</option>
                <option>Finishing</option>
                <option>Closeout</option>
              </Select>
              <Select
                label="Status"
                value={draft.status}
                onChange={(event) =>
                  setDraft({
                    ...draft,
                    status: event.target.value as ProjectDetail['status'],
                  })
                }
              >
                <option>Active</option>
                <option>Planning</option>
                <option>On Hold</option>
                <option>Completed</option>
              </Select>
              <Input
                label="Start date"
                value={draft.start}
                onChange={(event) =>
                  setDraft({ ...draft, start: event.target.value })
                }
              />
              <Input
                label="End date"
                value={draft.end}
                onChange={(event) =>
                  setDraft({ ...draft, end: event.target.value })
                }
              />
              <Input
                label="Progress (%)"
                type="number"
                value={draft.progress}
                onChange={(event) =>
                  setDraft({ ...draft, progress: Number(event.target.value) })
                }
              />
              <Input
                label="Tasks total"
                type="number"
                value={draft.tasksTotal}
                onChange={(event) =>
                  setDraft({ ...draft, tasksTotal: Number(event.target.value) })
                }
              />
              <Textarea
                label="Description"
                value={draft.description}
                onChange={(event) =>
                  setDraft({ ...draft, description: event.target.value })
                }
                className="md:col-span-2"
              />
            </div>
          ) : (
            <>
              <p className="text-sm text-slate-600">{draft.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                <span className="rounded-full bg-slate-100 px-2 py-1">
                  Timeline: {draft.start} - {draft.end}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-1">
                  Tasks: {draft.tasksTotal}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold text-slate-500">Progress</p>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: `${draft.progress}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  {draft.progress}% complete
                </p>
              </div>
            </>
          )}
        </Card>

        <Card title="Client Contact">
          {editing ? (
            <div className="space-y-3">
              <Input
                label="Contact name"
                value={draft.contact.name}
                onChange={(event) =>
                  setDraft({
                    ...draft,
                    contact: { ...draft.contact, name: event.target.value },
                  })
                }
              />
              <Input
                label="Role"
                value={draft.contact.role}
                onChange={(event) =>
                  setDraft({
                    ...draft,
                    contact: { ...draft.contact, role: event.target.value },
                  })
                }
              />
              <Input
                label="Email"
                value={draft.contact.email}
                onChange={(event) =>
                  setDraft({
                    ...draft,
                    contact: { ...draft.contact, email: event.target.value },
                  })
                }
              />
              <Input
                label="Phone"
                value={draft.contact.phone}
                onChange={(event) =>
                  setDraft({
                    ...draft,
                    contact: { ...draft.contact, phone: event.target.value },
                  })
                }
              />
            </div>
          ) : (
            <>
              <p className="text-sm font-semibold text-slate-900">
                {draft.contact.name}
              </p>
              <p className="text-xs text-slate-500">{draft.contact.role}</p>
              <div className="mt-3 text-xs text-slate-600">
                <p>{draft.contact.email}</p>
                <p>{draft.contact.phone}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="secondary">
                  Email client
                </Button>
                <Button size="sm" variant="ghost">
                  Log call
                </Button>
              </div>
            </>
          )}
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Budget Summary">
          <p className="text-xs text-slate-500">Total budget</p>
          <p className="text-2xl font-semibold text-slate-900">
            ₱{draft.totalBudget.toLocaleString()}
          </p>
          <p className="mt-3 text-xs text-slate-500">Spent</p>
          <p className="text-lg font-semibold text-slate-900">
            ₱{draft.budgetSpent.toLocaleString()}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Remaining ₱{remaining.toLocaleString()}
          </p>
          {editing && (
            <div className="mt-4 space-y-3">
              <Input
                label="Total budget (PHP)"
                type="number"
                value={draft.totalBudget}
                onChange={(event) =>
                  setDraft({ ...draft, totalBudget: Number(event.target.value) })
                }
              />
              <Input
                label="Spent (PHP)"
                type="number"
                value={draft.budgetSpent}
                onChange={(event) =>
                  setDraft({ ...draft, budgetSpent: Number(event.target.value) })
                }
              />
            </div>
          )}
        </Card>
        <Card title="Documents">
          <div className="space-y-2">
            {draft.documents.map((doc) => (
              <div
                key={doc.name}
                className="rounded-lg border border-slate-100 bg-white px-3 py-2 text-xs text-slate-600"
              >
                <p className="font-semibold text-slate-900">{doc.name}</p>
                <p className="text-slate-500">{doc.type}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Project Team">
          <div className="flex flex-wrap gap-2">
            {draft.team.map((member) => (
              <span
                key={member}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
              >
                {member}
              </span>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Schedule Risk">
          <ConstructionPlaceholder
            className="h-48"
            title="Critical path"
            description="Chart placeholder"
          />
        </Card>
        <Card title="Cost Trend">
          <ConstructionPlaceholder
            className="h-48"
            title="Cost variance"
            description="Chart placeholder"
          />
        </Card>
      </div>
    </div>
  )
}

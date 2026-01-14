import { useMemo, useState } from 'react'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Drawer } from '../../components/ui/Drawer'
import { PageHeader } from '../../components/layout/PageHeader'
import { cn } from '../../lib/cn'
import {
  projectDetails,
  tasks as mockTasks,
  type ProjectDetail,
  type Task,
  type TaskStatus,
} from '../../mocks/projects'

const columns: Array<{
  id: TaskStatus
  title: string
  tone: string
  helper: string
}> = [
  { id: 'backlog', title: 'Backlog', tone: 'bg-slate-200 text-slate-600', helper: 'Ready to pull' },
  { id: 'in-progress', title: 'In Progress', tone: 'bg-blue-100 text-blue-700', helper: 'Active work' },
  { id: 'review', title: 'Review', tone: 'bg-amber-100 text-amber-700', helper: 'Awaiting feedback' },
  { id: 'done', title: 'Done', tone: 'bg-emerald-100 text-emerald-700', helper: 'Shipped tasks' },
]

const priorityStyle: Record<Task['priority'], string> = {
  Low: 'bg-slate-100 text-slate-600',
  Medium: 'bg-blue-100 text-blue-700',
  High: 'bg-rose-100 text-rose-700',
}

export const EmployeeProjectsBoard = () => {
  const [selected, setSelected] = useState<Task | null>(null)
  const [activeProject, setActiveProject] = useState<ProjectDetail>(projectDetails[0])

  const tasksByStatus = useMemo(() => {
    return columns.map((column) => ({
      ...column,
      tasks: mockTasks.filter(
        (task) => task.status === column.id && task.project === activeProject.name,
      ),
    }))
  }, [activeProject.name])

  return (
    <div className="space-y-6">
      <PageHeader
        title="Projects & Tasks"
        description="Track construction milestones and site tasks."
        action={<Button>New task</Button>}
      />

      <div className="flex flex-wrap gap-2">
        {projectDetails.map((project) => (
          <Button
            key={project.id}
            variant={activeProject.id === project.id ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setActiveProject(project)}
          >
            {project.name}
          </Button>
        ))}
      </div>

      <Card title="Project Overview" description={activeProject.client}>
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-sm text-slate-600">{activeProject.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-slate-100 px-2 py-1">
                Total budget: ₱{activeProject.totalBudget.toLocaleString()}
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1">
                Total tasks: {activeProject.tasksTotal}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-500">Team members</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {activeProject.team.map((member) => (
                  <span
                    key={member}
                    className="rounded-full bg-white px-3 py-1 text-xs text-slate-600 shadow-sm"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-3 text-xs text-slate-600">
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Client contact</p>
              <p className="font-semibold text-slate-900">{activeProject.contact.name}</p>
              <p>{activeProject.contact.role}</p>
              <p className="mt-2 text-slate-500">{activeProject.contact.email}</p>
              <p className="text-slate-500">{activeProject.contact.phone}</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Documents</p>
              <div className="mt-2 space-y-2">
                {activeProject.documents.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-2 py-1"
                  >
                    <span>{doc.name}</span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      {doc.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-4">
        {tasksByStatus.map((column, index) => (
          <div
            key={column.id}
            className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm motion-safe:animate-fade-up"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">{column.title}</p>
                <p className="text-xs text-slate-500">{column.helper}</p>
              </div>
              <span className={cn('rounded-full px-2 py-1 text-xs font-semibold', column.tone)}>
                {column.tasks.length}
              </span>
            </div>
            <div className="space-y-3">
              {column.tasks.map((task) => (
                <button
                  key={task.id}
                  onClick={() => setSelected(task)}
                  className="w-full rounded-xl border border-slate-100 bg-white p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {task.title}
                      </p>
                      <p className="text-xs text-slate-500">{task.project}</p>
                    </div>
                    <span
                      className={cn(
                        'rounded-full px-2 py-1 text-xs font-semibold',
                        priorityStyle[task.priority],
                      )}
                    >
                      {task.priority}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>Due {task.due}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5">
                      {task.owner.split(' ')[0]}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Drawer
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={selected ? selected.title : 'Task detail'}
      >
        {selected && (
          <div className="space-y-5 text-sm text-slate-600">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">Project</p>
                <Badge variant="neutral">{selected.status.replace('-', ' ')}</Badge>
              </div>
              <p className="mt-1 text-base font-semibold text-slate-900">
                {selected.project}
              </p>
              <p className="mt-2 text-xs text-slate-500">{selected.id}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <Card title="Owner" description={selected.owner} />
              <Card title="Due date" description={selected.due} />
              <Card title="Priority" description={selected.priority} />
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-500">Summary</p>
              <p className="mt-2 text-sm text-slate-700">{selected.summary}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-500">Checklist</p>
              <div className="mt-2 space-y-2">
                {selected.checklist.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-3 py-2 text-xs"
                  >
                    <span
                      className={cn(
                        item.done ? 'text-slate-700' : 'text-slate-500',
                      )}
                    >
                      {item.label}
                    </span>
                    <span
                      className={cn(
                        'rounded-full px-2 py-0.5 text-[10px] font-semibold',
                        item.done ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600',
                      )}
                    >
                      {item.done ? 'Done' : 'Open'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-500">Recent activity</p>
              <div className="mt-2 space-y-2">
                {selected.activity.map((line) => (
                  <div
                    key={line}
                    className="rounded-lg border border-slate-100 bg-white px-3 py-2 text-xs text-slate-500"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  )
}

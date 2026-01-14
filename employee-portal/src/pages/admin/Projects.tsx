import { Link } from 'react-router-dom'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../../components/ui/Table'
import { PageHeader } from '../../components/layout/PageHeader'
import { ConstructionPlaceholder } from '../../components/common/ConstructionPlaceholder'
import { projectDetails } from '../../mocks/projects'

export const AdminProjects = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Projects Registry"
        description="Manage all construction projects and key contacts."
        action={<Button>New project</Button>}
      />

      <div className="grid gap-4 md:grid-cols-4">
        <Input label="Search" placeholder="Search project or client" />
        <Select label="Status">
          <option>All status</option>
          <option>Active</option>
          <option>Planning</option>
          <option>Completed</option>
        </Select>
        <Select label="Phase">
          <option>All phases</option>
          <option>Planning</option>
          <option>Structural</option>
          <option>Finishing</option>
        </Select>
        <Button className="self-end" variant="secondary">
          Apply filters
        </Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Project</TableHeaderCell>
            <TableHeaderCell>Client</TableHeaderCell>
            <TableHeaderCell>Location</TableHeaderCell>
            <TableHeaderCell>Phase</TableHeaderCell>
            <TableHeaderCell>Tasks</TableHeaderCell>
            <TableHeaderCell>Budget</TableHeaderCell>
            <TableHeaderCell>Progress</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projectDetails.map((project) => (
            <TableRow key={project.id} className="hover:bg-slate-50">
              <TableCell className="font-semibold text-slate-900">
                {project.name}
              </TableCell>
              <TableCell>{project.client}</TableCell>
              <TableCell>{project.location}</TableCell>
              <TableCell>{project.phase}</TableCell>
              <TableCell>{project.tasksTotal}</TableCell>
              <TableCell>
                ₱{project.totalBudget.toLocaleString()}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-20 rounded-full bg-slate-100">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-500">
                    {project.progress}%
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={project.status === 'Active' ? 'approved' : 'pending'}>
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Link to={`/admin/projects/${project.id}`}>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Portfolio Performance">
          <ConstructionPlaceholder
            className="h-48"
            title="Portfolio KPI trend"
            description="Chart placeholder"
          />
        </Card>
        <Card title="Upcoming Client Meetings">
          <div className="space-y-3 text-sm text-slate-600">
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Skyline Tower</p>
              <p className="font-semibold text-slate-900">Progress review</p>
              <p className="text-xs text-slate-500">Jan 19 • 10:00 AM</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Harbor Residences</p>
              <p className="font-semibold text-slate-900">Change order check</p>
              <p className="text-xs text-slate-500">Jan 22 • 2:00 PM</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

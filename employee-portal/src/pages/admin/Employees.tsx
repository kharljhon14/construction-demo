import { useState } from 'react'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Drawer } from '../../components/ui/Drawer'
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
import { employees, type EmployeeRecord } from '../../mocks/employees'

const departments = [
  'Site Engineering',
  'Site Operations',
  'Safety & QA',
  'Project Controls',
  'Finance',
]
const roles = [
  'Site Engineer',
  'Field Supervisor',
  'Safety Officer',
  'Cost Engineer',
  'Quantity Surveyor',
]

export const AdminEmployees = () => {
  const [active, setActive] = useState<EmployeeRecord | null>(null)
  const [formState, setFormState] = useState<EmployeeRecord | null>(null)

  const openDrawer = (employee: EmployeeRecord) => {
    setActive(employee)
    setFormState(employee)
  }

  const handleChange = <K extends keyof EmployeeRecord>(
    field: K,
    value: EmployeeRecord[K],
  ) => {
    if (!formState) return
    setFormState({ ...formState, [field]: value })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Crew Members"
        description="View all crew members and update their information."
        action={<Button>Add crew member</Button>}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Crew Member</TableHeaderCell>
            <TableHeaderCell>Department</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Employee ID</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id} className="hover:bg-slate-50">
              <TableCell className="font-semibold text-slate-900">
                {employee.name}
              </TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.role}</TableCell>
              <TableCell>
                <Badge variant={employee.status === 'Active' ? 'approved' : 'pending'}>
                  {employee.status}
                </Badge>
              </TableCell>
              <TableCell>{employee.id}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" onClick={() => openDrawer(employee)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Drawer
        open={Boolean(active)}
        onClose={() => setActive(null)}
        title={active ? `Update ${active.name}` : 'Update Crew Member'}
      >
        {formState && (
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                label="Full name"
                value={formState.name}
                onChange={(event) => handleChange('name', event.target.value)}
              />
              <Input
                label="Employee ID"
                value={formState.id}
                onChange={(event) => handleChange('id', event.target.value)}
              />
              <Select
                label="Department"
                value={formState.department}
                onChange={(event) => handleChange('department', event.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept}>{dept}</option>
                ))}
              </Select>
              <Select
                label="Role"
                value={formState.role}
                onChange={(event) => handleChange('role', event.target.value)}
              >
                {roles.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </Select>
              <Input
                label="Work email"
                value={formState.email}
                onChange={(event) => handleChange('email', event.target.value)}
              />
              <Input
                label="Phone number"
                value={formState.phone}
                onChange={(event) => handleChange('phone', event.target.value)}
              />
              <Select
                label="Status"
                value={formState.status}
                onChange={(event) => handleChange('status', event.target.value)}
              >
                <option>Active</option>
                <option>On Leave</option>
              </Select>
              <Input
                label="Base pay (PHP)"
                value={String(formState.basePay)}
                onChange={(event) =>
                  handleChange('basePay', Number(event.target.value))
                }
              />
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500">Government IDs</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Input
                  label="SSS"
                  value={formState.sss}
                  onChange={(event) => handleChange('sss', event.target.value)}
                />
                <Input
                  label="PhilHealth"
                  value={formState.philhealth}
                  onChange={(event) => handleChange('philhealth', event.target.value)}
                />
                <Input
                  label="Pag-IBIG"
                  value={formState.pagibig}
                  onChange={(event) => handleChange('pagibig', event.target.value)}
                />
                <Input
                  label="TIN"
                  value={formState.tin}
                  onChange={(event) => handleChange('tin', event.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1">Save updates</Button>
              <Button variant="secondary" className="flex-1">
                Reset changes
              </Button>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  )
}

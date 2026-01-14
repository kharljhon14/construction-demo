import { UploadCloud } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { Textarea } from '../../components/ui/Textarea'
import { PageHeader } from '../../components/layout/PageHeader'

export const AdminProfile = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Admin Profile"
        description="Manage your admin contact details and payroll identifiers."
        action={<Button>Save changes</Button>}
      />

      <Card title="Profile Details" description="Fields marked * are required.">
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Full name *" placeholder="Engr. Lorna Cruz" />
          <Input label="Employee ID *" placeholder="EMP-00123" />
          <Select label="Department *">
            <option>Site Operations</option>
            <option>Finance</option>
            <option>Project Controls</option>
          </Select>
          <Select label="Role *">
            <option>Site Supervisor</option>
            <option>Finance Lead</option>
            <option>Project Controller</option>
          </Select>
          <Input label="Phone number" placeholder="+63 912 345 6789" />
          <Input label="Work email" placeholder="admin@buildcrew.ph" />
          <Textarea
            label="Office address"
            placeholder="14F, Site Office, BGC, Taguig"
            className="md:col-span-2"
          />
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Use a number where finance and payroll can reach you quickly.
        </p>
      </Card>

      <Card
        title="Government Benefits"
        description="Update statutory IDs for payroll compliance."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="SSS number" placeholder="03-1234567-8" />
          <Input label="PhilHealth number" placeholder="12-345678901-2" />
          <Input label="Pag-IBIG number" placeholder="1234-5678-9012" />
          <Input label="TIN" placeholder="123-456-789-000" />
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Update identifiers when needed to keep payroll records accurate.
        </p>
      </Card>

      <Card title="Profile Photo" description="Upload a clear headshot.">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center">
          <span className="rounded-full bg-white p-3 text-blue-600 shadow-sm">
            <UploadCloud size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Drop image here or click to upload
            </p>
            <p className="text-xs text-slate-500">
              PNG or JPG up to 5MB. Recommended 400x400.
            </p>
          </div>
          <Button variant="secondary">Browse files</Button>
        </div>
      </Card>
    </div>
  )
}

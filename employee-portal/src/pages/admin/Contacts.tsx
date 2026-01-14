import { useState } from 'react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Drawer } from '../../components/ui/Drawer'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { Textarea } from '../../components/ui/Textarea'
import { PageHeader } from '../../components/layout/PageHeader'
import { contacts as initialContacts } from '../../mocks/operations'

type ContactItem = {
  name: string
  contact: string
  phone: string
  email: string
  address: string
  notes: string
}

type ContactGroup = {
  category: string
  items: ContactItem[]
}

export const AdminContacts = () => {
  const [groups, setGroups] = useState<ContactGroup[]>(initialContacts)
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState(groups[0]?.category ?? '')
  const [customCategory, setCustomCategory] = useState('')
  const [form, setForm] = useState<ContactItem>({
    name: '',
    contact: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  })

  const handleSave = () => {
    const targetCategory =
      category === 'new' ? customCategory.trim() : category.trim()
    if (!targetCategory || !form.name.trim()) {
      return
    }

    setGroups((prev) => {
      const existing = prev.find((group) => group.category === targetCategory)
      if (existing) {
        return prev.map((group) =>
          group.category === targetCategory
            ? { ...group, items: [...group.items, form] }
            : group,
        )
      }
      return [...prev, { category: targetCategory, items: [form] }]
    })

    setForm({
      name: '',
      contact: '',
      phone: '',
      email: '',
      address: '',
      notes: '',
    })
    setCategory(targetCategory)
    setCustomCategory('')
    setOpen(false)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Site Contacts"
        description="Hardware suppliers, equipment rentals, and utility partners."
        action={<Button onClick={() => setOpen(true)}>Add contact</Button>}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.category} title={group.category}>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-slate-100 bg-white px-4 py-3 text-xs text-slate-600"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">{item.contact}</p>
                  <p className="mt-2">{item.phone}</p>
                  <p>{item.email}</p>
                  <p className="text-slate-500">{item.address}</p>
                  <p className="mt-2 text-xs text-slate-500">{item.notes}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Drawer open={open} onClose={() => setOpen(false)} title="Add site contact">
        <div className="space-y-4">
          <Select
            label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {groups.map((group) => (
              <option key={group.category} value={group.category}>
                {group.category}
              </option>
            ))}
            <option value="new">New category</option>
          </Select>
          {category === 'new' && (
            <Input
              label="New category name"
              value={customCategory}
              onChange={(event) => setCustomCategory(event.target.value)}
            />
          )}
          <Input
            label="Company name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
          <Input
            label="Primary contact"
            value={form.contact}
            onChange={(event) => setForm({ ...form, contact: event.target.value })}
          />
          <Input
            label="Phone"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
          />
          <Input
            label="Email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
          <Input
            label="Address"
            value={form.address}
            onChange={(event) => setForm({ ...form, address: event.target.value })}
          />
          <Textarea
            label="Notes"
            value={form.notes}
            onChange={(event) => setForm({ ...form, notes: event.target.value })}
          />
          <div className="flex gap-2">
            <Button className="flex-1" onClick={handleSave}>
              Save contact
            </Button>
            <Button variant="secondary" className="flex-1" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

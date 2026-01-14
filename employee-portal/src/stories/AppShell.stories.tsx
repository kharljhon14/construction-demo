import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { LayoutDashboard, UserCircle, ClipboardList } from 'lucide-react'
import { AppShell } from '../components/layout/AppShell'
import { Card } from '../components/ui/Card'
import { RoleProvider } from '../context/RoleContext'

const meta: Meta<typeof AppShell> = {
  title: 'Layout/AppShell',
  component: AppShell,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <RoleProvider>
          <Story />
        </RoleProvider>
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof AppShell>

export const Default: Story = {
  args: {
    items: [
      { label: 'Dashboard', to: '/employee/dashboard', icon: LayoutDashboard },
      { label: 'Update Profile', to: '/employee/profile', icon: UserCircle },
      { label: 'Submit Request', to: '/employee/requests/new', icon: ClipboardList, accent: 'orange' },
    ],
    children: (
      <div className="space-y-4">
        <Card title="Welcome back" description="Preview of the app shell.">
          <p className="text-sm text-slate-600">
            This area holds the main page content for the portal.
          </p>
        </Card>
      </div>
    ),
  },
}

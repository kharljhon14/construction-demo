import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { LayoutDashboard } from 'lucide-react'
import { SidebarNavItem } from '../components/layout/SidebarNavItem'

const meta: Meta<typeof SidebarNavItem> = {
  title: 'Layout/SidebarNavItem',
  component: SidebarNavItem,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
}

export default meta
type Story = StoryObj<typeof SidebarNavItem>

export const Default: Story = {
  args: {
    to: '/employee/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
}

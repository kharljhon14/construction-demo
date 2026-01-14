import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components/ui/Badge'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
}

export default meta
type Story = StoryObj<typeof Badge>

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="pending">Pending</Badge>
      <Badge variant="approved">Approved</Badge>
      <Badge variant="rejected">Rejected</Badge>
      <Badge variant="neutral">Info</Badge>
    </div>
  ),
}

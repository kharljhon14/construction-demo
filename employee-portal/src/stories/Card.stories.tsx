import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card
      title="Pending Requests"
      description="Awaiting manager approval"
      action={<Button variant="ghost">View</Button>}
    >
      <p className="text-sm text-slate-600">
        You currently have 3 pending requests in the queue.
      </p>
    </Card>
  ),
}

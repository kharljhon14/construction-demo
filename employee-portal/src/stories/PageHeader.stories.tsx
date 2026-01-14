import type { Meta, StoryObj } from '@storybook/react'
import { PageHeader } from '../components/layout/PageHeader'
import { Button } from '../components/ui/Button'

const meta: Meta<typeof PageHeader> = {
  title: 'Layout/PageHeader',
  component: PageHeader,
}

export default meta
type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  render: () => (
    <PageHeader
      title="Weekly Reports"
      description="Track and review latest submissions."
      action={<Button>New report</Button>}
    />
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from '../components/common/EmptyState'

const meta: Meta<typeof EmptyState> = {
  title: 'UI/EmptyState',
  component: EmptyState,
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {
    title: 'No reports yet',
    description: 'Submit a weekly report to see it appear here.',
    actionLabel: 'Create report',
    onAction: () => {},
  },
}

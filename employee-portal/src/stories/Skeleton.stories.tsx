import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonCard, SkeletonTable } from '../components/common/Skeleton'

const meta: Meta = {
  title: 'UI/Skeleton',
}

export default meta
type Story = StoryObj

export const Variants: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2">
      <SkeletonCard />
      <SkeletonTable />
    </div>
  ),
}

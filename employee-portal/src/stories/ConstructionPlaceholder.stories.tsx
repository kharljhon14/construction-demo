import type { Meta, StoryObj } from '@storybook/react'
import { ConstructionPlaceholder } from '../components/common/ConstructionPlaceholder'

const meta: Meta<typeof ConstructionPlaceholder> = {
  title: 'UI/ConstructionPlaceholder',
  component: ConstructionPlaceholder,
}

export default meta
type Story = StoryObj<typeof ConstructionPlaceholder>

export const Default: Story = {
  args: {
    title: 'Analytics coming soon',
    description: 'We are building this dashboard view.',
  },
}

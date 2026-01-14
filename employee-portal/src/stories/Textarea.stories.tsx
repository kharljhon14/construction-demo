import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '../components/ui/Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  render: () => (
    <div className="max-w-sm">
      <Textarea label="Notes" placeholder="Share more context..." />
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../components/ui/Input'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => (
    <div className="max-w-sm">
      <Input label="Email" placeholder="name@buildcrew.ph" />
    </div>
  ),
}

export const WithHint: Story = {
  render: () => (
    <div className="max-w-sm">
      <Input
        label="Phone"
        placeholder="+63 999 123 4567"
        hint="Include country code."
      />
    </div>
  ),
}

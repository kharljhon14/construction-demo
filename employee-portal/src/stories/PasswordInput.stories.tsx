import type { Meta, StoryObj } from '@storybook/react'
import { PasswordInput } from '../components/ui/PasswordInput'

const meta: Meta<typeof PasswordInput> = {
  title: 'UI/PasswordInput',
  component: PasswordInput,
}

export default meta
type Story = StoryObj<typeof PasswordInput>

export const Default: Story = {
  render: () => (
    <div className="max-w-sm">
      <PasswordInput label="Password" placeholder="Enter password" />
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '../components/ui/Select'

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <div className="max-w-sm">
      <Select label="Department">
        <option>Site Engineering</option>
        <option>Site Operations</option>
        <option>Project Controls</option>
      </Select>
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from '../components/common/SearchInput'

const meta: Meta<typeof SearchInput> = {
  title: 'UI/SearchInput',
  component: SearchInput,
}

export default meta
type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <SearchInput />
    </div>
  ),
}

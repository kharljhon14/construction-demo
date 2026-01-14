import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { AvatarMenu } from '../components/common/AvatarMenu'
import { RoleProvider } from '../context/RoleContext'

const meta: Meta<typeof AvatarMenu> = {
  title: 'UI/AvatarMenu',
  component: AvatarMenu,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <RoleProvider>
          <div className="flex justify-end">
            <Story />
          </div>
        </RoleProvider>
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof AvatarMenu>

export const Default: Story = {}

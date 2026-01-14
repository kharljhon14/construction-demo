import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { Login } from '../../pages/Login'
import { RoleProvider } from '../../context/RoleContext'

const meta: Meta<typeof Login> = {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <RoleProvider>
          <Story />
        </RoleProvider>
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Login>

export const Default: Story = {}

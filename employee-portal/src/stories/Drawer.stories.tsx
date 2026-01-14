import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Drawer } from '../components/ui/Drawer'
import { Button } from '../components/ui/Button'

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
}

export default meta
type Story = StoryObj<typeof Drawer>

const DrawerStory = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} title="Request Detail">
        <p className="text-sm text-slate-600">
          Drawer content placeholder for request details.
        </p>
      </Drawer>
    </div>
  )
}

export const Default: Story = {
  render: () => <DrawerStory />,
}

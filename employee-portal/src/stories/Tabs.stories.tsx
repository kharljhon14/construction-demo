import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tabs } from '../components/ui/Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

const TabsStory = () => {
  const [value, setValue] = useState('requests')
  return (
    <Tabs
      tabs={[
        { label: 'Requests', value: 'requests', badge: '12' },
        { label: 'Reports', value: 'reports' },
      ]}
      value={value}
      onChange={setValue}
    />
  )
}

export const Default: Story = {
  render: () => <TabsStory />,
}

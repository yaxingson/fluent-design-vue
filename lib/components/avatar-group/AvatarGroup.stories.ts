import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3'
import AvatarGroup from '.'

const meta:Meta<typeof AvatarGroup> = {
  component:AvatarGroup,
  title: 'components/AvatarGroup',
  tags: ['autodocs'],
  argTypes: {
   
  },
  args: {
     
  },
}

export default meta

type Story = StoryObj<typeof AvatarGroup>

export const Layout: Story = {}
export const Indicator: Story = {}

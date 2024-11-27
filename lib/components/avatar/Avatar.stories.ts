import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from '.'

const meta: Meta<typeof Avatar> = {
  component:Avatar,
  title: 'components/Avatar',
  tags: ['autodocs'],
  argTypes: {
    name:{
      control:'text',
      type:'string'
    },
    image:{
      control:'object'
    },
    
  },
  args: {

  }
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Name: Story = {}
export const Image: Story = {}
export const Icon: Story = {}
export const Badge: Story = {}

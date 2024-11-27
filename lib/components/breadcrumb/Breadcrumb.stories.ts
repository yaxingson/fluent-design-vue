import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3'
import Breadcrumb from '.'

const meta = {
  component:Breadcrumb,
  title: 'components/Breadcrumb',
  tags: ['autodocs'],
  argTypes: {
    size:{
      control:'inline-radio',
      options:['small', 'medium', 'large']
    }
  },
  args: {

  },
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

export const Size: Story = {}

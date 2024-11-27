import { h } from 'vue'
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '.'

const meta: Meta<typeof Button> = {
  component:Button,
  title: 'components/Button',
  tags: ['autodocs'],
  argTypes: {
    shape:{
      control:{type:'select'},
      options:['circular', 'square', 'rounded']
    },
    appearance:{
      control:{type:'select'},
      options:['secondary', 'primary', 'outline', 'transparent', 'subtle']
    },
    icon:{
      control:{type:'object'}
    },
    size:{
      control:{type:'inline-radio'},
      options:['small', 'medium', 'large']
    },
    disabled:{
      control:{type:'boolean'}
    },
    loading:{
      control:{type:'boolean'}
    }

  },
  args: {

  },
  render() {
    return h(Button, 'default')
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Shape: Story = {}
export const Appearance: Story = {}
export const Icon: Story = {}
export const Size: Story = {}
export const Disabled: Story = {}
export const Loading: Story = {}

import { within, userEvent, expect, fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3'
import { Card } from '.'

const meta: Meta<typeof Card> = {
  component:Card,
  title: 'components/Card',
  tags: ['autodocs'],
  argTypes: {
    orientation:{
      control:{type:'inline-radio',},
      options:['vertical', 'horizontal']
    },
    size:{
      control:{
        type:'inline-radio',
      },
      options:['small', 'medium', 'large']
    },
    appearance:{
      control:{type:'select'},
      options:[
        'filled',
        'filled-alternative',
        'subtle',
        'outline'
      ]
    },
    selected:{
      control:{type:'boolean'}
    }
  },
  args: {

  }
}

export default meta

type Story = StoryObj<typeof Card>

export const Orientation: Story = {}
export const Size: Story = {}
export const Appearance: Story = {}
export const Selectable: Story = {}

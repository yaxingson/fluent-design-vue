import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test';
import { Accordion } from '.'

const meta: Meta<typeof Accordion> = {
  title: 'components/Accordion',
  tags: ['autodocs'],
  component:Accordion,
  argTypes: {
    collapsible:{
      control:'boolean',
    },
    multiple:{
      control:'boolean',
    },
    'open-items':{
      control:'object'
    }
  },
  args: {

  }
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Collapsible: Story = {}
export const Controlled: Story = {}
export const Multiple: Story = {}
export const Inline: Story = {}


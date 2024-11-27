import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from '.'

const meta: Meta<typeof Badge> = {
  component:Badge,
  title: 'components/Badge',
  tags: ['autodocs'],
  argTypes: {
   appearance:{
    control:'select',
    options:['filled', 'outline', 'ghost', 'tint']
   },
   size:{
    control:'select',
    options:['tiny', 'extra-small', 'small', 'medium', 'large', 'extra-large'],
   },
   shape:{
    control:'select',
    options:['circular', 'square', 'rounded']
   },
   color:{
    control:'select',
    options:['success', 'danger', 'warning']
   },
   icon:{
    control:'object'
   }
  },
  args: {

  },
}

export default meta

type Story = StoryObj<typeof Badge>

export const Appearance: Story = {}
export const Size: Story = {}
export const Shape: Story = {}
export const Color: Story = {}
export const Icon: Story = {}

import { defineComponent, h } from 'vue'
import type { App } from 'vue'

type CardProps = {
  orientation:'vertical'|'horizontal'
  appearance:'filled'|'filled-alternative'|'subtle'|'outline'
  size:'small'|'medium'|'large',
  selected:boolean
}

const CardHeader = defineComponent({
  setup() {
    return ()=>h('div')
  }
})

const CardPreview = defineComponent({
  setup() {
    return ()=>h('div')
  }
})

const CardFooter = defineComponent({
  setup() {
    return ()=>h('div')
  }
})

const Card = defineComponent<CardProps>({
  slots:['default'],
  setup(props, ctx) {

    return ()=>h('div', {}, [])
  }
})

Card.install = (app:App)=>{
  app.component('fl-card', Card)
}

export {
  Card,
  CardHeader,
  CardPreview,
  CardFooter,

}

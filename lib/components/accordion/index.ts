import Accordion from './Accordion.vue'
import AccordionPanel from './AccordionPanel.vue'
import AccordionHeader from './AccordionHeader.vue'
import AccordionItem from './AccordionItem.vue'
import type { App } from 'vue'

Accordion.install = (app:App)=>{
  app.component('fl-accordion', Accordion)
  app.component('fl-accordion-item', AccordionItem)
  app.component('fl-accordion-header', AccordionHeader)
  app.component('fl-accordion-panel', AccordionPanel)
}

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
}

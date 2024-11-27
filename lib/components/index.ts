import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from './accordion'
import Avatar from './avatar'
import Badge from './badge'
import Button from './button'
import { Card, CardHeader, CardPreview, CardFooter } from './card'
import type { App } from 'vue'

const components = {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Avatar,
  Badge,
  Button,
}

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Avatar,
  Badge,
  Button,
}

export default {
  install(app:App) {
    Object.keys(components).forEach(name=>{
      app.component(`el-${name.replace(/[A-Z]/g, c=>` ${c}`)
        .trim().split(' ').join('-').toLowerCase()}`, components[name])
    })
  }
}

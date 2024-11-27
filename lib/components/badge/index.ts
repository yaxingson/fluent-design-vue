import Badge from './Badge.vue'
import type { App } from 'vue'

Badge.install = (app:App)=>{
  app.component('fl-badge', Badge)
}

export default Badge

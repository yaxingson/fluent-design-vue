import Breadcrumb from './Breadcrumb.vue'
import type { App } from 'vue'

Breadcrumb.install = (app:App)=>{
  app.component('fl-breadcrumb', Breadcrumb)
}

export default Breadcrumb

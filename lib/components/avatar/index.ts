import Avatar from './Avatar.vue'
import type { App } from 'vue'

Avatar.install = (app:App)=>{
  app.component('fl-avatar', Avatar)
}

export default Avatar

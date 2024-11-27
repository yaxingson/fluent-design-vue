import AvatarGroup from './AvatarGroup.vue'
import type { App } from 'vue'

AvatarGroup.install = (app:App)=>{
  app.component('fl-avatar-group', AvatarGroup)
}

export default AvatarGroup

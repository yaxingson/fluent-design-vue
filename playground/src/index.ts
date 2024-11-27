import { createApp } from 'vue'
import FluentDesignVue from 'fluent-design-vue'
import App from './App.vue'

import 'fluent-design-vue/dist/index.css'

createApp(App)
  .use(FluentDesignVue)
  .mount('#app')

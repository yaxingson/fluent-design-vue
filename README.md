<div align="center">
	<p>A Vue.js 3 UI library based on Fluent2 Design System.</p>
	<img src="https://img.shields.io/npm/v/fluent-design-vue.svg" alt="" />
	<img src="https://img.shields.io/badge/node-%20%3E%3D%2018-47c219" alt="" />
	<img src="https://img.shields.io/npm/dm/fluent-design-vue.svg" alt="" />
	<img src="https://codecov.io/gh/element-plus/element-plus/branch/dev/graph/badge.svg?token=BKSBO2GLZI" alt="" />
	<img src="https://github.com/vueComponent/ant-design-vue/workflows/test/badge.svg" alt="" />
</div>

## Get Started

### Install

Use package manager:

```shell
# npm
$ npm install fluent-design-vue --save

# pnpm
$ pnpm add fluent-design-vue

```

Import in browser:

```html
<head>
  <link rel="stylesheet" href="//unpkg.com/fluent-design-vue/dist/index.css" />
  <script src="//unpkg.com/vue@3"></script>
  <script src="//unpkg.com/fluent-design-vue"></script>
</head>

```

### Usage

Global import:

```ts
// main.ts
import { createApp } from 'vue'
import FluentDesignVue from 'fluent-design-vue'
import App from './App.vue'

import 'fluent-design-vue/dist/index.css'

const app = createApp(App)

app.use(FluentDesignVue)
app.mount('#app')

```

Global partial import:

```ts
// main.ts
import { createApp } from 'vue'
import { FlButton } from 'fluent-design-vue'
import App from './App'

const app = createApp(App);

app.use(FlButton).mount('#app')

```

Auto import:

```shell
$ npm install -D unplugin-vue-components unplugin-auto-import

```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import FluentDesignVueResolver from 'fluent-design-vue/auto-import-resolver'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      imports:[
        {
          'fluent-design-vue':[
            'useToast',
            'useDialog',

          ]
        }
      ],
      resolvers: [FluentDesignVueResolver()],
    }),
    Components({
      resolvers: [FluentDesignVueResolver()],
    }),
  ]
})

```

Manually import:

```shell
$ npm i -D  unplugin-fluent-design-vue

```

```vue
<template>
  <fl-button>I am flButton</fl-button>
</template>
<script>
  import { flButton } from 'fluent-design-vue'
  export default {
    components: { flButton },
  }
</script>

```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import FluentDesignVue from 'unplugin-fluent-design-vue/vite'

export default defineConfig({
  // ...
  plugins: [FluentDesignVue()],
})

```

### Configuration

Global import:

```ts
import { createApp } from 'vue'
import FluentDesignVue from 'fluent-design-vue'
import App from './App.vue'

const app = createApp(App)
app.use(FluentDesignVue, { size: 'small', zIndex: 3000 })

```

On-demand:

```vue
<template>
  <fl-config-provider :size="size" :z-index="zIndex">
    <app />
  </fl-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { FlConfigProvider } from 'fluent-design-vue'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
})
</script>

```

## Compatibility


## Links

- [fluent2]()
- [vue]()
- [changelog]()
- [docs]()
- [playground]()

## License

Fluent Design Vue is open source software licensed as MIT.

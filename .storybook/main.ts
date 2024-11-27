import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../lib/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {
       
    },
  },
  viteFinal:async config=>{
    return mergeConfig(config, {
      plugins:[vue()]
    })
  }
}

export default config

import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  args:{},
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

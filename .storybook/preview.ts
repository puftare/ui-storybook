import "../src/index.css";
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import type { Preview } from "@storybook/react";

const preview: Preview = {
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

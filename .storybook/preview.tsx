import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/3xMSel6kgGx0IKI92JQpnW/-v11--Carbon-Design-System--Community-?node-id=58-2763&t=BqfJpnqJ6DmrT6mN-1",
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  tags: ['autodocs'],
};

export default preview;
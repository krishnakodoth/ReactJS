
/* Global decorator */
import React from 'react';
import Center from '../src/components/Center/Center';
// import '@storybook/addon-console';
// import { withConsole } from '@storybook/addon-console';

/* export const decorators = [
  (Story) => (
    <Center><Story /></Center>
  ),
]; */

// .storybook/preview.tsx

// import { Preview } from '@storybook/react';

const preview = {
  decorators: [
    (Story) => (
      <Center>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Center>
    ),
  ],
};

export default preview;

/*
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
*/
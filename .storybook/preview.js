import React from 'react';

import { GlobalStyle } from '../src/shared/global';

/*
Global decorator to apply the styles to all stories
Read more about them at:
https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
*/
export const decorators = [
  Story => (
    <>
    <GlobalStyle />
    <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // Storybook a11y addon config
  a11y: {
    // target DOM element
    element: "#root",
    // set exclusion mode for addon
    manual: false,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
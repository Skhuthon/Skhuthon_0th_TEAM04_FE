import React from "react";
import { RecoilRoot } from "recoil";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import ModalContainer from "../src/components/common/Modal/ModalContainer";
import ToastContainer from "../src/components/common/Toast/ToastContainer";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { handles: ["mouseover", "click button"] },
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Story />
          <ModalContainer />
          <ToastContainer />
        </ThemeProvider>
      </RecoilRoot>
    ),
  ],
};

export default preview;

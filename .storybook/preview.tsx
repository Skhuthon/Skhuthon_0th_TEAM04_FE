import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/styles/theme";
import useTheme from "../src/hooks/useTheme";

import ModalContainer from "../src/components/common/Modal/ModalContainer";
import ToastContainer from "../src/components/common/Toast/ToastContainer";
import { GlobalStyle } from "../src/styles/globalStyle";

interface Props {
  children: ReactNode;
}

const defaultValue = {
  theme: "light",
  onChangeTheme: () => {},
};

export const CustomThemeContext = React.createContext(defaultValue);

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
    (Story) => {
      const themeProps = useTheme();
      return (
        <RecoilRoot>
          <CustomThemeContext.Provider value={themeProps}>
            <ThemeProvider
              theme={themeProps.theme === "light" ? lightTheme : darkTheme}
            >
              <GlobalStyle />
              <Story />
              <ModalContainer />
              <ToastContainer />
            </ThemeProvider>
          </CustomThemeContext.Provider>
        </RecoilRoot>
      );
    },
  ],
};

export default preview;

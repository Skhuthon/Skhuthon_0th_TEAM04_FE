import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import App from "./App";
import ModalContainer from "./components/common/Modal/ModalContainer.tsx";
import ToastContainer from "./components/common/Toast/ToastContainer.tsx";

// recoil root, them provider
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
        <ModalContainer />
        <ToastContainer />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);

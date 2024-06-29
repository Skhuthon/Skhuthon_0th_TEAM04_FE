import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "@/App";
import ModalContainer from "@/components/common/Modal/ModalContainer.tsx";
import ToastContainer from "@/components/common/Toast/ToastContainer.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/queryClient.ts";
import ThemeProvider from "@/context/ThemeProvider.tsx";
import { GlobalStyle } from "./styles/globalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider>
          <GlobalStyle />
          <App />
          <ModalContainer />
          <ToastContainer />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);

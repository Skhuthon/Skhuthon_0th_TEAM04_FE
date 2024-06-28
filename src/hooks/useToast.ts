import { ToastMessage } from "@/types/common";
import { useState } from "react";

export const useToast = () => {
  const [toastMessage, setToastMessage] = useState<ToastMessage>({
    message: "",
    isOpen: false,
  });

  const toastOpen = (message: string) => {
    setToastMessage({
      message,
      isOpen: true,
    });
  };

  const toastClose = () => {
    setToastMessage({
      message: "",
      isOpen: false,
    });
  };

  return { toastOpen, toastClose, toastMessage };
};

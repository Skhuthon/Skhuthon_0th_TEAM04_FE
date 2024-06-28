import type { Meta } from "@storybook/react";

import Toast from ".";
import { useToast } from "../../../hooks/useToast";

const meta = {
  title: "토스트",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    showDuration: {
      type: "number",
    },
  },
  args: {
    children: "Some message",
  },
} satisfies Meta<typeof Toast>;

export default meta;

export const Default = ({ ...args }) => {
  const { toastOpen: open, toastClose: close, toastMessage } = useToast();

  return (
    <>
      <button onClick={() => open(args.children)}>Show Toast</button>
      {toastMessage.isOpen && (
        <Toast isOpen={toastMessage.isOpen} {...args} onClose={close}>
          {toastMessage.message}
        </Toast>
      )}
    </>
  );
};

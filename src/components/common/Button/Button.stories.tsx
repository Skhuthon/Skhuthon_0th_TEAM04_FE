import type { Meta } from "@storybook/react";
import Button from ".";

const meta = {
  title: "버튼",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
  argTypes: {
    buttonStyle: {
      control: {
        type: "radio",
      },
      options: ["default", "gradient"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    buttonColor: {
      control: { type: "radio" },
      options: ["main", "point"],
      table: {
        defaultValue: { summary: "main" },
      },
    },
    disabled: { control: "boolean" },
  },
  args: {
    buttonColor: "main",
    buttonStyle: "default",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default = ({ ...args }) => {
  return (
    <div style={{ width: "300px", height: "500px" }}>
      <Button
        {...args}
        buttonStyle={args.buttonStyle}
        buttonColor={args.buttonColor}
      >
        로그인
      </Button>
    </div>
  );
};

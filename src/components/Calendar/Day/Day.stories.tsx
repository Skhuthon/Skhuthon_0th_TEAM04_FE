import type { Meta } from "@storybook/react";
import Day from ".";

const meta = {
  title: "캘린더/데이",
  component: Day,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
  argTypes: {
    isFilled: {
      control: { type: "radio" },
      options: ["none", "circle", "fill"],
      table: {
        defaultValue: { summary: "none" },
      },
    },
  },
  args: {
    isFilled: "none",
    year: 2024,
    month: 6,
    day: 29,
    isDisabled: true,
  },
} satisfies Meta<typeof Day>;

export default meta;

export const Default = ({ ...args }) => {
  return (
    <div style={{ width: "300px", height: "500px" }}>
      <Day
        {...args}
        isFilled={args.isFilled}
        day={args.day}
        isDisabled={args.disbled}
      />
    </div>
  );
};

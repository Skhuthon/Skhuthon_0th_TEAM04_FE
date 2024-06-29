import type { Meta } from "@storybook/react";
import Input from ".";
import { ChangeEvent, useState } from "react";

const meta = {
  title: "입력/textarea",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

export const Default = ({ ...args }) => {
  const [value, setValue] = useState("");

  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length > 500) return;
    setValue(e.target.value);
  };
  return (
    <div style={{ width: "300px", height: "500px" }}>
      <Input
        {...args}
        value={value}
        placeholder="내용을 입력해주세요"
        label="내용"
        onChangeValue={onChangeValue}
      />
    </div>
  );
};

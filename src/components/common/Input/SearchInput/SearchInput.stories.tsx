import type { Meta } from "@storybook/react";
import SearchInput from ".";
import { ChangeEvent, useState } from "react";

const meta = {
  title: "입력/검색창",
  component: SearchInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;

export const Default = ({ ...args }) => {
  const [value, setValue] = useState("");

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ width: "300px", height: "500px" }}>
      <SearchInput
        {...args}
        value={value}
        placeholder="다이어리 제목 검색"
        onChangeValue={onChangeValue}
        onClick={() => alert(`검색어 ${value}`)}
      />
    </div>
  );
};

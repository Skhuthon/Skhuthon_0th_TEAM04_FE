import type { Meta } from "@storybook/react";
import Diary from ".";

const meta = {
  title: "교환일기 보기",
  component: Diary,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
  argTypes: {
    isBorder: {
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
  args: {
    isBorder: true,
    content: "안녕\n 하세요",
  },
} satisfies Meta<typeof Diary>;

export default meta;

export const Default = ({ ...args }) => {
  return (
    <div style={{ width: "300px", height: "500px" }}>
      <Diary
        diaryId={0}
        title="지영과 수경의 교환일기"
        content={args.content}
        date="2024-06-29"
        sing=""
        isBorder={args.isBorder}
        onClick={() => alert("눌렸습니다")}
      ></Diary>
    </div>
  );
};

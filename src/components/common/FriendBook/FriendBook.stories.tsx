import type { Meta } from "@storybook/react";
import FriendBook from ".";

const meta = {
  title: "친구 모음 북",
  component: FriendBook,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
} satisfies Meta<typeof FriendBook>;

export default meta;

export const Default = () => {
  return (
    <div style={{ width: "300px", height: "500px" }}>
      <FriendBook
        title="지영과 수경의 교환일기"
        onClick={() => alert("눌렸습니다")}
      ></FriendBook>
    </div>
  );
};

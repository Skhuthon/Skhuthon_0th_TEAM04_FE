import type { Meta } from "@storybook/react";
import Header from ".";

const meta = {
  title: "헤더",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

export const Default = () => {
  return (
    <div style={{ width: "300px", height: "500px" }}>
      <Header
        onClickLogo={() => alert("logo")}
        onClickMyPage={() => alert("mypage")}
      />
    </div>
  );
};

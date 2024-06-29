import type { Meta } from "@storybook/react";
import Input from ".";
import { ChangeEvent, useState } from "react";

import PasswrodIcon from "@/assets/svg/icon-auth-password.svg";
import PasswordShowIcon from "@/assets/svg/icon-auth-passwordShow.svg";
import PersonIcon from "@/assets/svg/icon-auth-name.svg";

const meta = {
  title: "입력/input",
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

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ width: "300px", height: "500px" }}>
      <Input
        {...args}
        value={value}
        placeholder="id"
        leftIcon={PersonIcon}
        onChangeValue={onChangeValue}
      />
    </div>
  );
};

export const Password = ({ ...args }) => {
  const [password, setPassword] = useState<{
    value: string;
    type: "password" | "text";
  }>({ value: "", type: "password" });
  const [passwordCheck, setPassworkCheck] = useState<{
    value: string;
    type: "password" | "text";
    errorMessage?: string;
  }>({ value: "", type: "password", errorMessage: undefined });

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword((prev) => ({ ...prev, value: e.target.value }));
  };

  const onChangePasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const errorMessage =
      password.value !== e.target.value ? "비밀번호를 확인해주세요" : undefined;
    setPassworkCheck((prev) => ({
      ...prev,
      value: e.target.value,
      errorMessage: errorMessage,
    }));
  };

  return (
    <div
      style={{
        width: "300px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Input
        {...args}
        type={password.type}
        value={password.value}
        placeholder="password"
        onChangeValue={onChangeValue}
        leftIcon={PasswrodIcon}
        rightIcon={{
          icon: PasswordShowIcon,
          onClick: () =>
            setPassword((prev) => ({
              ...prev,
              type: prev.type === "password" ? "text" : "password",
            })),
        }}
      />
      <Input
        {...args}
        type={password.type}
        value={passwordCheck.value}
        placeholder="passwordCheck"
        onChangeValue={onChangePasswordCheck}
        errorMessage={passwordCheck.errorMessage}
        leftIcon={PasswrodIcon}
        rightIcon={{
          icon: PasswordShowIcon,
          onClick: () =>
            setPassworkCheck((prev) => ({
              ...prev,
              type: prev.type === "password" ? "text" : "password",
            })),
        }}
      />
    </div>
  );
};

export const Diary = ({ ...args }) => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState<string>("");
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  return (
    <div style={{ width: "300px", height: "500px" }}>
      <Input
        {...args}
        label="제목"
        value={value}
        placeholder="제목을 입력해주세요"
        onChangeValue={onChangeValue}
        inputWidth="100%"
      />
      <Input
        {...args}
        label="날짜"
        type="date"
        value={date}
        placeholder="날짜를 입력해주세요"
        onChangeValue={onChangeDate}
        inputWidth="100%"
      />
    </div>
  );
};

import Input from "@/components/common/Input/Input";
import Toast from "@/components/common/Toast";
import { useSignUp } from "@/hooks/api/auth/usePostSignUp";
import { ChangeEvent, useState } from "react";
import PasswrodIcon from "@/assets/svg/icon-auth-password.svg";
import PasswordShowIcon from "@/assets/svg/icon-auth-passwordShow.svg";
import NameIcon from "@/assets/svg/icon-auth-name.svg";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import { P, StyledDiv, StyledH1 } from "@/styles/common";

const Signup = () => {
  const navigate = useNavigate();

  const { mutate, toastClose, toastMessage } = useSignUp();

  const handleClickButton = () => {
    mutate({
      password: password.value,
      senderName: name,
    });
  };

  const [name, setName] = useState<string>("");

  const [password, setPassword] = useState<{
    value: string;
    type: "password" | "text";
  }>({ value: "", type: "password" });
  const [passwordCheck, setPasswordCheck] = useState<{
    value: string;
    type: "password" | "text";
    errorMessage?: string;
  }>({ value: "", type: "password", errorMessage: undefined });

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword((prev) => ({ ...prev, value: e.target.value }));
  };

  const onChangePasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const errorMessage =
      password.value !== e.target.value ? "비밀번호를 확인해주세요" : undefined;
    setPasswordCheck((prev) => ({
      ...prev,
      value: e.target.value,
      errorMessage: errorMessage,
    }));
  };

  return (
    <>
      <StyledDiv>
        <StyledH1>회원가입</StyledH1>
        <Input
          value={name}
          placeholder="name"
          onChangeValue={onChangeName}
          leftIcon={NameIcon}
        />
        <Input
          type={password.type}
          value={password.value}
          placeholder="password"
          onChangeValue={onChangePassword}
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
          type={passwordCheck.type}
          value={passwordCheck.value}
          placeholder="passwordCheck"
          onChangeValue={onChangePasswordCheck}
          errorMessage={passwordCheck.errorMessage}
          leftIcon={PasswrodIcon}
          rightIcon={{
            icon: PasswordShowIcon,
            onClick: () =>
              setPasswordCheck((prev) => ({
                ...prev,
                type: prev.type === "password" ? "text" : "password",
              })),
          }}
        />
        <Button
          buttonColor="main"
          buttonStyle="gradient"
          onClick={handleClickButton}
          disabled={
            !name || // 이름이 없거나
            !password.value || // 비밀번호가 없거나
            !passwordCheck.value || // 비밀번호 확인이 없거나
            !!passwordCheck.errorMessage // 비밀번호 확인에서 에러메세지가 있거나
          }
        >
          회원가입
        </Button>
        <P
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          이미 계정이 있으신가요?
        </P>
      </StyledDiv>
      <Toast isOpen={toastMessage.isOpen} onClose={toastClose}>
        {toastMessage.message}
      </Toast>
    </>
  );
};

export default Signup;

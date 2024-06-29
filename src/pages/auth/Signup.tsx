import Input from "@/components/common/Input/Input";
import Toast from "@/components/common/Toast";
import { useSignUp } from "@/hooks/api/auth/usePostSignUp";
import { ChangeEvent, useState } from "react";
import PasswrodIcon from "@/assets/svg/icon-auth-password.svg";
import PasswordShowIcon from "@/assets/svg/icon-auth-passwordShow.svg";
import NameIcon from "@/assets/svg/icon-auth-name.svg";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <SignupDiv>
        <StyledH1>회원가입</StyledH1>
        <StyledInput
          value={name}
          placeholder="name"
          onChangeValue={onChangeName}
          leftIcon={NameIcon}
        />
        <br />
        <StyledInput
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
        <br />
        <StyledInput
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
        <br />
        <StyledButton
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
        </StyledButton>
        <P
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          이미 계정이 있으신가요?
        </P>
      </SignupDiv>
      <Toast isOpen={toastMessage.isOpen} onClose={toastClose}>
        {toastMessage.message}
      </Toast>
    </>
  );
};

export default Signup;

export const SignupDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  gap: 10px;
`;

const StyledInput = styled(Input)`
  margin: 10px 0;
`;

const StyledButton = styled(Button)`
  margin: 20px 0;
`;

const StyledH1 = styled.div`
  padding: 100px;
  font-size: 60pt;
`;
const P = styled.p`
  cursor: pointer;
`;

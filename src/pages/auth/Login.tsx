import Input from "@/components/common/Input/Input";
import Toast from "@/components/common/Toast";
import { useLogin } from "@/hooks/api/auth/usePostLogin";
import { ChangeEvent, useState } from "react";
import NameIcon from "@/assets/svg/icon-auth-name.svg";
import { useNavigate } from "react-router-dom";
import PasswrodIcon from "@/assets/svg/icon-auth-password.svg";
import PasswordShowIcon from "@/assets/svg/icon-auth-passwordShow.svg";
import Button from "@/components/common/Button";
import styled from "styled-components";
// import "styles/styles.css";

const Login = () => {
  const navigate = useNavigate();
  const { mutate, toastClose, toastMessage } = useLogin();

  const handleClickButton = () => {
    mutate({
      password: "1234",
      memberName: "지영",
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
      <LoginDiv>
        <StyledH1>로그인</StyledH1>
        <StyledInput
          value={name}
          placeholder="name"
          onChangeValue={onChangeName}
          leftIcon={NameIcon}
        />
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
        <StyledButton
          buttonColor="main"
          buttonStyle="gradient"
          onClick={handleClickButton}
          disabled={
            !name || // 이름이 없거나
            !password.value // 비밀번호가 없을 경우
          }
        >
          로그인
        </StyledButton>
        <div
          onClick={() => {
            navigate("/auth/signup");
          }}
        >
          새로운 계정을 만들어보세요!
        </div>
        <Toast isOpen={toastMessage.isOpen} onClose={toastClose}>
          {toastMessage.message}
        </Toast>
      </LoginDiv>
    </>
  );
};

export default Login;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 200px;
  margin: 100px;
`;

const StyledInput = styled(Input)`
  padding: 10px;
  margin: 10px;
`;

const StyledButton = styled(Button)`
  margin: 20px;
`;

const StyledH1 = styled.div`
  padding: 50px;
  font-size: 60pt;
`;

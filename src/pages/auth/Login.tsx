import Input from "@/components/common/Input/Input";
import Toast from "@/components/common/Toast";
import { useLogin } from "@/hooks/api/auth/usePostLogin";
import { ChangeEvent, useEffect, useState } from "react";
import NameIcon from "@/assets/svg/icon-auth-name.svg";
import { useLocation, useNavigate } from "react-router-dom";
import PasswrodIcon from "@/assets/svg/icon-auth-password.svg";
import PasswordShowIcon from "@/assets/svg/icon-auth-passwordShow.svg";
import Button from "@/components/common/Button";
import styled from "styled-components";
import { StyledDiv, StyledH1 } from "@/styles/common";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mutate, toastClose, toastMessage } = useLogin();

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

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword((prev) => ({ ...prev, value: e.target.value }));
  };

  useEffect(() => {
    if (location && location?.state?.name) {
      setName(location.state.name);
    }
  }, [location]);

  return (
    <>
      <StyledDiv>
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
        <P
          onClick={() => {
            navigate("/auth/signup");
          }}
        >
          새로운 계정을 만들어보세요!
        </P>
        <Toast isOpen={toastMessage.isOpen} onClose={toastClose}>
          {toastMessage.message}
        </Toast>
      </StyledDiv>
    </>
  );
};

export default Login;

const StyledInput = styled(Input)`
  padding: 10px;
  margin: 10px;
`;

const StyledButton = styled(Button)`
  margin: 20px;
`;

const P = styled.p`
  cursor: pointer;
`;

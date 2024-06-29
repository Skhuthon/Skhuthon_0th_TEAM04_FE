import React, { ChangeEvent } from "react";
import * as S from "./Input.styled";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string; // 입력창 라벨
  leftIcon?: string; // 왼쪽 아이콘
  rightIcon?: { icon: string; onClick?: () => void }; //오른쪽 아이콘
  errorMessage?: string; //에러메세지
  inputWidth?: string; //100%string, 인풋 너비 기본은 80%
}

const Input = ({
  value,
  onChangeValue,
  label,
  leftIcon,
  rightIcon,
  errorMessage,
  inputWidth = "98%",
  ...rest
}: Props) => {
  return (
    <S.InputWrapper>
      {label && <S.InputLabel>{label}</S.InputLabel>}
      <S.InputContainer>
        <div style={{ width: "100%" }}>
          {leftIcon && <img src={leftIcon} alt="left-icon" />}
          <S.InputArea
            {...rest}
            value={value}
            inputWidth={inputWidth}
            onChange={(e) => onChangeValue(e)}
          />
        </div>
        {rightIcon && (
          <img
            src={rightIcon.icon}
            alt="right-icon"
            onClick={rightIcon.onClick}
          />
        )}
      </S.InputContainer>
      {errorMessage && (
        <S.InputLabel color="red" fontSize="medium">
          {errorMessage}
        </S.InputLabel>
      )}
    </S.InputWrapper>
  );
};

export default Input;

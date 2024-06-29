import React, { ChangeEvent } from "react";
import * as S from "./TextArea.styled";
import * as SS from "../Input/Input.styled";

export interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChangeValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string; // 입력창 라벨
  errorMessage?: string; //에러메세지
  inputWidth?: string; //100%string, 인풋 너비 기본은 80%
}

const TextArea = ({
  value,
  onChangeValue,
  label,
  errorMessage,
  inputWidth = "98%",
  ...rest
}: Props) => {
  return (
    <SS.InputWrapper>
      {label && <S.InputLabel>{label}</S.InputLabel>}
      <SS.InputContainer height="300px">
        <div style={{ width: "100%" }}>
          <S.TextArea
            {...rest}
            value={value}
            inputWidth={inputWidth}
            onChange={(e) => onChangeValue(e)}
          />
        </div>
      </SS.InputContainer>
      {errorMessage && (
        <S.InputLabel color="red" fontSize="medium">
          {errorMessage}
        </S.InputLabel>
      )}
    </SS.InputWrapper>
  );
};

export default TextArea;

import React, { ButtonHTMLAttributes, forwardRef } from "react";
import * as S from "./Button.styled";

export type ButtonStyle = "default" | "gradient";
export type ButtonColor = "main" | "point";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle: ButtonStyle;
  buttonColor: ButtonColor;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, buttonStyle, buttonColor, ...rest } = props;

  return (
    <S.ButtonWrapper
      ref={ref}
      {...rest}
      buttonStyle={buttonStyle}
      buttonColor={buttonColor}
    >
      {children}
    </S.ButtonWrapper>
  );
});

export default Button;

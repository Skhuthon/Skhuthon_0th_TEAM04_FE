import { styled } from "styled-components";
import { ButtonColor, ButtonStyle } from ".";

const getMainColor = (color: string) => {
  if (color.replace("#", "").length === 6) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 1)`;
  }
  return color;
};

const getSubColor = (color: string) => {
  if (color.replace("#", "").length === 6) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 0.4)`;
  }
  return color;
};

export const ButtonWrapper = styled.button<{
  buttonStyle: ButtonStyle;
  buttonColor: ButtonColor;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  display: flex;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.medium};
  border-radius: 60px;

  border: none;

  background: ${({ buttonStyle, buttonColor, theme }) =>
    buttonStyle === "default"
      ? theme.color[buttonColor]
      : `linear-gradient(90deg, ${getSubColor(theme.color[buttonColor])} 0%, ${getMainColor(theme.color[buttonColor])} 100%);`};

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
    background: gray;
  }
`;

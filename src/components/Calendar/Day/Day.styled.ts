import { styled } from "styled-components";

export const Wrapper = styled.button<{
  isFilled: "none" | "circle" | "fill";
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: ${({ isFilled, theme }) =>
    isFilled !== "none" ? `1px solid ${theme.color.main}` : "none"};

  background-color: ${({ isFilled, theme }) =>
    isFilled === "fill" ? `${theme.color.main}` : theme.color.background};

  color: ${({ isFilled }) => (isFilled === "fill" ? "#fff" : "#000")};

  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

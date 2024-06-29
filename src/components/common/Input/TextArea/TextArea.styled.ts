import { styled } from "styled-components";

export const TextArea = styled.textarea<{ inputWidth: string }>`
  width: ${({ inputWidth }) => inputWidth};
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.large};
  resize: none;
  height: 100%;
`;

export const InputLabel = styled.span<{
  color?: string;
  fontSize?: "medium" | "large";
}>`
  color: ${({ color, theme }) => color || theme.color.text};
  color: ${({ fontSize, theme }) => theme.fontSize[fontSize || "large"]};

  margin: 5px;
`;

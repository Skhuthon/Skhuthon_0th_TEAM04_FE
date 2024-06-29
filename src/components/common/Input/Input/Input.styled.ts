import { styled } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const InputContainer = styled.div<{ height?: string }>`
  display: flex;
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.color.text}`};
  justify-content: space-between;
  height: ${({ height = "50px" }) => height};
  border-radius: 10px;
  padding: 12px 20px;
  border: ${({ theme }) => `1px solid ${theme.color.main}`};

  > div {
    display: flex;
    align-items: center;

    > img {
      margin-right: 5px;
    }
  }
`;

export const InputArea = styled.input<{ inputWidth: string }>`
  width: ${({ inputWidth }) => inputWidth};
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.large};

  &:disabled {
    background-color: ${({ theme }) => theme.color.background};
  }
`;

export const InputLabel = styled.span<{
  color?: string;
  fontSize?: "medium" | "large";
}>`
  color: ${({ color, theme }) => color || theme.color.text};
  color: ${({ fontSize, theme }) => theme.fontSize[fontSize || "large"]};

  margin: 5px;
`;

import { styled } from "styled-components";
import { InputArea } from "../Input/Input.styled";

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.color.text}`};
  justify-content: space-between;
  height: 50px;
  border-radius: 50px;
  padding: 12px 20px;
`;

export const SearchInputArea = styled(InputArea)``;

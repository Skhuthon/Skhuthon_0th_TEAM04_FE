import React from "react";
import { styled } from "styled-components";

interface Props {
  title: string;
  onClick: () => void;
}
const List = ({ title, onClick }: Props) => {
  return (
    <>
      <ListDiv onClick={onClick}>
        <StyledH3>{title}</StyledH3>
      </ListDiv>
    </>
  );
};

export default List;

export const ListDiv = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: ${({ theme }) => theme.boxBorder.bookBorder};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledH3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30pt;
`;

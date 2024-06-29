import React from "react";
import { styled } from "styled-components";
import UserIcon from "@/assets/svg/icon-user.svg";

export interface Props {
  onClickLogo: () => void;
  onClickMyPage: () => void;
}
const Header = ({ onClickLogo, onClickMyPage }: Props) => {
  return (
    <HeaderWrapper>
      <HeaderLogo onClick={onClickLogo}>About Romance</HeaderLogo>
      <HeaderUser onClick={onClickMyPage}>
        <img src={UserIcon} alt="user" />
      </HeaderUser>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: ${({ theme }) => theme.boxShadow.headerShadow}; */
  border-bottom: ${({ theme }) => `2px solid ${theme.color.main}`};
  padding: 0px 10px;
  position: sticky;
  top: 0;
`;

const HeaderLogo = styled.div`
  font-family: "point";
  cursor: pointer;
`;

const HeaderUser = styled.div`
  cursor: pointer;
`;

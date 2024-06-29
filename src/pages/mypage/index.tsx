import Button from "@/components/common/Button";
// import { useGetFriendAccept } from "@/hooks/api/mypage/useGetFriendAccept";
import useCurrentUser from "@/hooks/useAuth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const MyPage = () => {
  const navigate = useNavigate();
  const { resetUser } = useCurrentUser();

  const onClickLogout = () => {
    navigate("/auth/login");
    localStorage.clear();
    resetUser();
  };

  return (
    <MyPageWrapper>
      <UnderLineP
        onClick={() => {
          navigate("/request");
        }}
      >
        친구 추가하기
      </UnderLineP>
      <ButtonWrapper>
        <Button
          buttonStyle={"gradient"}
          buttonColor={"main"}
          onClick={onClickLogout}
        >
          로그아웃
        </Button>
      </ButtonWrapper>
    </MyPageWrapper>
  );
};

export default MyPage;

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
`;

const UnderLineP = styled.p`
  border-bottom: ${({ theme }) => `1px solid ${theme.color.main}`};

  margin: 10px 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

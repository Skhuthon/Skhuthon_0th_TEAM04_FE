import styled from "styled-components";

export const FriendDiv = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  border: 1px solid #eaeaea;
  box-shadow: ${({ theme }) => theme.boxShadow.bookShadow};
  border-radius: 4px;
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
`;

export const FriendLCoverDiv = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.point};
  border-radius: 4px;
  display: flax;
  flex-direction: center;
  align-items: center;
`;

export const FriendRCoverDiv = styled.div`
  width: 20%;
  height: 20px;
  background-color: ${({ theme }) => theme.color.point};
  border-radius: 4px;
  display: flex;
  flex-direction: center;
  align-items: center;
  position: absolute;
  right: 0;
`;

export const FriendTextDiv = styled.div`
  padding: 10px;
`;

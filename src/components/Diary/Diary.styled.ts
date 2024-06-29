import styled from "styled-components";

export const DiaryDiv = styled.div<{ isBorder: boolean }>`
  width: 100%;
  height: 100%;
  background-color: white;
  border: ${({ isBorder, theme }) => isBorder && theme.boxBorder.bookBorder};
  box-shadow: ${({ isBorder, theme }) =>
    isBorder && theme.boxShadow.bookShadow};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FriendDiaryDiv = styled.div<{ isBorder: boolean }>`
  width: 100%;
  height: 100%;
  background-color: white;
  border: ${({ isBorder, theme }) => isBorder && theme.boxBorder.bookBorder};
  box-shadow: ${({ isBorder, theme }) =>
    isBorder && theme.boxShadow.bookShadow};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DiaryBox = styled.div`
  width: 10%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.point};
`;

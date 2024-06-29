import React from "react";
import styled from "styled-components";
import * as S from "./Diary.styled";
export interface Props {
  diaryId: number;
  title?: string; // 제목이 있을 때만
  content: string;
  date: string;
  sing: string;
  isBorder: boolean;
  onClick: () => void;
}
const Diary = ({
  diaryId,
  title,
  content,
  date,
  sing,
  onClick,
  isBorder,
}: Props) => {
  return (
    <div>
      <S.DiaryDiv onClick={onClick} isBorder={isBorder}>
        <Title>{title}</Title>
        <Content> {content}</Content>
        <Date>{date}</Date>
        {sing}
      </S.DiaryDiv>
      <S.DiaryBox></S.DiaryBox>
    </div>
  );
};

export default Diary;

const Content = styled.div`
  white-space: pre;
`;

const Title = styled.div`
  padding: 100px;
`;

const Date = styled.div`
  padding: 50px;
  margin: 10px;
`;

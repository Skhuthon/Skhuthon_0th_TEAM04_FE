import React from "react";
import styled from "styled-components";
import * as S from "./FriendBook.styled";
export interface Props {
  friendId: number;
  title: string;
  onClick: () => void;
}
const FriendBook = ({ friendId, title, onClick }: Props) => {
  return (
    <S.FriendDiv onClick={onClick}>
      <S.FriendLCoverDiv></S.FriendLCoverDiv>
      <S.FriendTextDiv>{title}</S.FriendTextDiv>
      <S.FriendRCoverDiv></S.FriendRCoverDiv>
    </S.FriendDiv>
  );
};

export default FriendBook;

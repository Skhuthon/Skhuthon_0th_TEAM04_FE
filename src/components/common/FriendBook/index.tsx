import * as S from "./FriendBook.styled";
export interface Props {
  title: string;
  onClick: () => void;
}
const FriendBook = ({ title, onClick }: Props) => {
  return (
    <S.FriendDiv onClick={onClick}>
      <S.FriendLCoverDiv></S.FriendLCoverDiv>
      <S.FriendTextDiv>{title}</S.FriendTextDiv>
      <S.FriendRCoverDiv></S.FriendRCoverDiv>
    </S.FriendDiv>
  );
};

export default FriendBook;

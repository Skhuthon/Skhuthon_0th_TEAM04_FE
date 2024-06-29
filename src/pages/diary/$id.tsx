import List from "@/components/List";
import Button from "@/components/common/Button";
import { useGetListByFriendId } from "@/hooks/api/diary/useGetListByFriendId";
import { DiaryDetailState, FriendInfoState } from "@/store";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { styled } from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const friendInfo = useRecoilValue(FriendInfoState);
  const { data } = useGetListByFriendId(friendInfo.friendId || 0);
  const setDiaryDetail = useSetRecoilState(DiaryDetailState);
  return (
    <Wrapper>
      {data?.data?.map((el) => (
        <>
          <List
            title={el.title}
            onClick={() => {
              setDiaryDetail(el);
              navigate("/diary");
            }}
          />
        </>
      ))}
      <ButtonWrapper>
        <Button
          buttonStyle="gradient"
          buttonColor="main"
          onClick={() => {
            navigate("/diary/write");
          }}
        >
          일기 작성하기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  position: relative;
  /* justify-content: center; */
  /* align-items: center; */
`;

const ButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
`;

import FriendBook from "@/components/common/FriendBook";
import { useGetFriend } from "@/hooks/api/main/useGetFriend";
import useCurrentUser from "@/hooks/useAuth";
import { FriendInfoState } from "@/store";
import { StyledH1 } from "@/styles/common";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const Main = () => {
  const { currentUser } = useCurrentUser();
  const { data } = useGetFriend(currentUser.senderId);

  console.log("data", data);
  const navigate = useNavigate();
  const setFriendInfo = useSetRecoilState(FriendInfoState);
  return (
    <>
      <StyledH1>{currentUser?.senderName}의 책장</StyledH1>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {data?.data.map((el) => (
          <>
            <FriendBook
              title={el.title}
              onClick={() => {
                setFriendInfo(el);
                navigate(`/diary/${el.friendId}`);
              }}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Main;

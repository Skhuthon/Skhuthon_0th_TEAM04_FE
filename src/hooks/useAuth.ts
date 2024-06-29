// 로그인 되어있는 상태인지 확인
import { useRecoilValue, useResetRecoilState } from "recoil";
import { UserIdState, UserState } from "@/store";

const useCurrentUser = () => {
  const currentUserId = useRecoilValue(UserIdState);
  const currentUser = useRecoilValue(UserState);

  const resetUser = useResetRecoilState(UserState);
  return { currentUserId, currentUser, resetUser };
};

export default useCurrentUser;

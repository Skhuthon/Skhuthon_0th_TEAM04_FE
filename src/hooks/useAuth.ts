// 로그인 되어있는 상태인지 확인
import { useRecoilValue } from "recoil";
import { UserIdState } from "@/store";

const useCurrentUser = () => {
  const currentUserId = useRecoilValue(UserIdState);

  return { currentUserId };
};

export default useCurrentUser;

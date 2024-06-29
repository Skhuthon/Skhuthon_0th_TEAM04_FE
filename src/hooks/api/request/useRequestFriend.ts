import useCurrentUser from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";
import { post } from "@/libs/api";
import { FriendRequest } from "@/types/request";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const postFriendRequest = async (id: number, params: FriendRequest) => {
  const res = await post(`/apis/v1/friends/request?id=${id}`, params);

  return { res }; // 성공적인 경우 데이터 반환
};

export const useRequestFriend = () => {
  const { toastOpen, toastClose, toastMessage } = useToast();
  const navigate = useNavigate();
  const { currentUser } = useCurrentUser();

  const { mutate } = useMutation({
    mutationFn: (params: FriendRequest) =>
      postFriendRequest(currentUser.senderId, params),

    onSuccess: ({ res }) => {
      console.log("res", res);
      toastOpen("친구 요청 성공했습니다");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
    onError: () => {
      toastOpen("오류가 발생했습니다");
    },
  });
  return { mutate, toastClose, toastMessage };
};

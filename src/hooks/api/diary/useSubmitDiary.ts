import useCurrentUser from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";
import { post } from "@/libs/api";
import { queryClient } from "@/libs/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface ISubmitDiary {
  title: string;
  content: string;
  sing: "";
  friendId: number;
}
const submitDiary = async (id: number, params: ISubmitDiary) => {
  const res = await post(`/apis/v1/diary/create?id=${id}`, params);
  console.log("res");
  return { res }; // 성공적인 경우 데이터 반환
};

export const useSubmitDiary = () => {
  const { toastOpen, toastClose, toastMessage } = useToast();
  const navigate = useNavigate();
  const { currentUser } = useCurrentUser();

  const { mutate } = useMutation({
    mutationFn: (params: ISubmitDiary) =>
      submitDiary(currentUser.senderId, params),

    onSuccess: ({ res }) => {
      console.log("res", res);
      toastOpen("일기 작성에 성공했습니다");
      queryClient.clear();
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

import { useToast } from "@/hooks/useToast";
import { post } from "@/libs/api";

import { SignupRequest } from "@/types/user";
import { useMutation } from "@tanstack/react-query";

const postSignUp = async (params: SignupRequest) => {
  const res = await post(`/members`, params);

  return { res }; // 성공적인 경우 데이터 반환
};

export const useSignUp = () => {
  const { toastOpen, toastClose, toastMessage } = useToast();
  const { mutate } = useMutation({
    mutationFn: (params: SignupRequest) => postSignUp(params),

    onSuccess: ({ res }) => {
      console.log("res", res);
      toastOpen("생성되었습니다");
    },
    onError: () => {
      toastOpen("오류가 발생했습니다");
    },
  });
  return { mutate, toastClose, toastMessage };
};

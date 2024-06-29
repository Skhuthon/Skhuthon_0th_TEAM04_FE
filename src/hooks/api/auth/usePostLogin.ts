import { useToast } from "@/hooks/useToast";
import { post } from "@/libs/api";

import { LoginRequest } from "@/types/user";
import { useMutation } from "@tanstack/react-query";

const postLogin = async (params: LoginRequest) => {
  const res = await post(`/apis/v1/members`, params);

  return { res }; // 성공적인 경우 데이터 반환
};

export const useLogin = () => {
  const { toastOpen, toastClose, toastMessage } = useToast();
  const { mutate } = useMutation({
    mutationFn: (params: LoginRequest) => postLogin(params),

    onSuccess: ({ res }) => {
      console.log("res", res);
      toastOpen("환영합니다");
    },
    onError: () => {
      toastOpen("오류가 발생했습니다");
    },
  });
  return { mutate, toastClose, toastMessage };
};

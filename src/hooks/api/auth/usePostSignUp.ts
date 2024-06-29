import { useToast } from "@/hooks/useToast";
import { post } from "@/libs/api";

import { SignupRequest, SingupResponse } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const postSignUp = async (params: SignupRequest) => {
  const res = await post<{ data: SingupResponse }>(`/apis/v1/members`, params);

  return { res: res.data }; // 성공적인 경우 데이터 반환
};

export const useSignUp = () => {
  const { toastOpen, toastClose, toastMessage } = useToast();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (params: SignupRequest) => postSignUp(params),

    onSuccess: ({ res }) => {
      console.log("res", res);
      toastOpen("가입되었습니다.");

      setTimeout(() => {
        navigate("/auth/login", {
          state: {
            name: res.senderName,
          },
        });
      }, 1000);
    },
    onError: (err: any) => {
      toastOpen(err.response.data.message || "오류가 발생했습니다");
    },
  });
  return { mutate, toastClose, toastMessage };
};

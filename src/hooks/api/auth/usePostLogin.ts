import { useToast } from "@/hooks/useToast";
import { instance, post } from "@/libs/api";
import { queryClient } from "@/libs/queryClient";
import { UserState } from "@/store";

import { LoginRequest, LoginResponse } from "@/types/user";
import { storageConstants } from "@/utils/constants";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const postLogin = async (params: LoginRequest) => {
  const res = await post<{ data: LoginResponse }>(
    `/apis/v1/members/login`,
    params
  );

  return { res }; // 성공적인 경우 데이터 반환
};

export const useLogin = () => {
  const { toastOpen, toastClose, toastMessage } = useToast();
  const navigate = useNavigate();
  const setUser = useSetRecoilState(UserState);

  const { mutate } = useMutation({
    mutationFn: (params: LoginRequest) => postLogin(params),

    onSuccess: ({ res }) => {
      toastOpen("환영합니다");
      queryClient.clear();
      setTimeout(() => {
        setUser(res.data);
        // 토큰 저장
        instance.defaults.headers.common["Authorization"] =
          res.data.tokenResponseDto.accessToken;

        localStorage.setItem(
          storageConstants.accessToken,
          res.data.tokenResponseDto.accessToken
        );

        navigate("/");
      }, 1000);
    },
    onError: () => {
      toastOpen("오류가 발생했습니다");
    },
  });
  return { mutate, toastClose, toastMessage };
};

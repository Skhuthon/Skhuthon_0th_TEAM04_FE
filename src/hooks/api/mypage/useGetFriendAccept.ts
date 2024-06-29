import { get } from "@/libs/api";
import { FriendList } from "@/types/friend";
import { queryKeys } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

const getFriendAccept = async (memberId: number) => {
  const res = await get<{ data: FriendList }>(
    `/apis/v1/friends/request?memberId=${memberId}`
  );
  console.log("res", res);
  return { data: res.data };
};

export const useGetFriendAccept = (memberId: number) => {
  const { data } = useQuery({
    queryFn: () => getFriendAccept(memberId),
    queryKey: [queryKeys.friendAccept, memberId],
  });

  return { data };
};

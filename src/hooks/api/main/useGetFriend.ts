import { get } from "@/libs/api";
import { FriendList } from "@/types/friend";
import { queryKeys } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

const getFriendList = async (memberId: number) => {
  const res = await get<{ data: FriendList }>(
    `/apis/v1/friends/list?memberId=${memberId}`
  );

  return { res: res.data };
};

export const useGetFriend = (memberId: number) => {
  const { data } = useQuery({
    queryFn: () => getFriendList(memberId),
    queryKey: [queryKeys.friendList, memberId],
  });

  return { data };
};

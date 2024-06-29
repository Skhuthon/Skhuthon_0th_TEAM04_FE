import { get } from "@/libs/api";
import { DiaryContent } from "@/types/diary";
import { queryKeys } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

const getDiaryByFriendId = async (friendId: number) => {
  const res = await get<{ data: DiaryContent[] }>(
    `/apis/v1/diary/read/friend/${friendId}?page=100&size=100`
  );

  return { data: res.data };
};
export const useGetListByFriendId = (friendId: number) => {
  const { data } = useQuery({
    queryFn: () => getDiaryByFriendId(friendId),
    queryKey: [queryKeys.diaryList, friendId],
  });

  return { data };
};

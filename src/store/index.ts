import { DiaryContent } from "@/types/diary";
import { FriendInfo } from "@/types/friend";
import { User } from "@/types/user";
import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const modalState = atom<{ id: string }[]>({
  key: "modalState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const UserState = atom<User>({
  key: "UserState",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const UserIdState = selector<number>({
  key: "UserIdState",
  get: ({ get }) => {
    const user = get(UserState);
    return user?.senderId || 0;
  },
});

export const FriendInfoState = atom<FriendInfo>({
  key: "FriendInfoState",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const DiaryDetailState = atom<DiaryContent>({
  key: "DiaryDetailState",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

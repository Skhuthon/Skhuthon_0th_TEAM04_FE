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
});

export const UserIdState = selector<number>({
  key: "UserIdState",
  get: ({ get }) => {
    const user = get(UserState);
    return user?.memberId || 0;
  },
});

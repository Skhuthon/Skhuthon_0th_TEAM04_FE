import { useGetFriend } from "@/hooks/api/main/useGetFriend";
import useCurrentUser from "@/hooks/useAuth";
import React from "react";

const Main = () => {
  const { currentUser } = useCurrentUser();
  const { data } = useGetFriend(currentUser.senderId);

  console.log("data", data);
  return <div>{currentUser?.senderName}의 책장</div>;
};

export default Main;

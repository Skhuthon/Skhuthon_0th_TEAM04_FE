import Button from "@/components/common/Button";
import Input from "@/components/common/Input/Input";
import Toast from "@/components/common/Toast";
import { useRequestFriend } from "@/hooks/api/request/useRequestFriend";
import { StyledDiv, StyledH1 } from "@/styles/common";
import React, { ChangeEvent, useState } from "react";

const Request = () => {
  const [friendName, setFriendName] = useState("");
  const [title, setTitle] = useState("");

  const { mutate, toastClose, toastMessage } = useRequestFriend();

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setFriendName(e.target.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClickButton = () => {
    mutate({
      title: title,
      friendName: friendName,
    });
  };

  return (
    <StyledDiv>
      <StyledH1>친구 추가하기</StyledH1>
      <Input
        label="친구 이름"
        value={friendName}
        placeholder="친구의 이름을 입력해주세요"
        onChangeValue={onChangeName}
      />
      <Input
        label="교환일기 제목"
        value={title}
        placeholder="교환일기 제목을 입력해주세요"
        onChangeValue={onChangeTitle}
      />
      <Button
        buttonColor="main"
        buttonStyle="gradient"
        onClick={handleClickButton}
        disabled={!friendName || !title}
      >
        친구 추가하기
      </Button>
      <Toast isOpen={toastMessage.isOpen} onClose={toastClose}>
        {toastMessage.message}
      </Toast>
    </StyledDiv>
  );
};

export default Request;

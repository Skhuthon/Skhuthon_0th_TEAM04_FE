import Button from "@/components/common/Button";
import Input from "@/components/common/Input/Input";
import Toast from "@/components/common/Toast";
import { useRequestFriend } from "@/hooks/api/request/useRequestFriend";
import React, { ChangeEvent, useState } from "react";
import { styled } from "styled-components";

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
    <LoginDiv>
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
      <StyledButton
        buttonColor="main"
        buttonStyle="gradient"
        onClick={handleClickButton}
        disabled={!friendName || !title}
      >
        친구 추가하기
      </StyledButton>

      <Toast isOpen={toastMessage.isOpen} onClose={toastClose}>
        {toastMessage.message}
      </Toast>
    </LoginDiv>
  );
};

export default Request;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  margin: 20px;
`;

const StyledH1 = styled.div`
  padding: 50px;
  font-size: 60pt;
  white-space: pre;
`;

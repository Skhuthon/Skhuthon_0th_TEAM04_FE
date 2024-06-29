import { ChangeEvent, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Toast from "@/components/common/Toast";
import Input from "@/components/common/Input/Input";
import Button from "@/components/common/Button";
import TextArea from "@/components/common/Input/TextArea";
import { useSubmitDiary } from "@/hooks/api/diary/useSubmitDiary";
import { useRecoilValue } from "recoil";
import { FriendInfoState } from "@/store";
import { StyledDiv, StyledH1, TwoButtonWrapper } from "@/styles/common";

const Write = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const friendInfo = useRecoilValue(FriendInfoState);
  const [writeState, setWriteState] = useState<"create" | "update">("create");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate, toastClose, toastMessage } = useSubmitDiary();

  const onClick = () => {
    mutate({
      title: title,
      content: content,
      sing: "",
      friendId: friendInfo.friendId,
    });
  };

  const handleCancelButton = () => {
    navigate(-1);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    if (location && location.state?.update) {
      setWriteState("update");
    } else {
      setWriteState("create");
    }
  }, [location]);

  return (
    <>
      <StyledDiv>
        <StyledH1>일기 {writeState === "create" ? "작성" : "수정"}</StyledH1>
        <Input
          value={title}
          placeholder="제목을 입력해주세요"
          onChangeValue={onChangeTitle}
        />
        <TextArea
          value={content}
          placeholder="내용을 입력해주세요"
          onChangeValue={onChangeContent}
        />
        {/* <Input
          value={date}
          type="date"
          placeholder="날짜를 입력해주세요"
          onChangeValue={onChangeDate}
        /> */}
        <TwoButtonWrapper>
          <Button
            buttonColor="point"
            buttonStyle="default"
            onClick={() => handleCancelButton()}
          >
            취소
          </Button>
          <Button
            buttonColor="main"
            buttonStyle="default"
            onClick={() => {
              onClick();
            }}
            disabled={
              !title || // 제목이 없거나
              !content // 내용이 없거나
            }
          >
            {writeState === "create" ? "작성하기" : "수정하기"}
          </Button>
        </TwoButtonWrapper>
      </StyledDiv>
      <Toast isOpen={toastMessage.isOpen} onClose={toastClose}>
        {toastMessage.message}
      </Toast>
    </>
  );
};

export default Write;

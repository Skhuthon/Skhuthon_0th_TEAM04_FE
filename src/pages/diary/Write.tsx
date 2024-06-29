import { ChangeEvent, useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Toast from "@/components/common/Toast";
import Input from "@/components/common/Input/Input";
import Button from "@/components/common/Button";
import TextArea from "@/components/common/Input/TextArea";

const Write = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [writeState, setWriteState] = useState<"create" | "update">("create");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [sing, setSing] = useState("");
  const [date, setDate] = useState("");

  const handleEditButton = () => {
    mutate({
      title: "",
      content: "",
      sing: "",
      date: "",
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

  const onChangeSing = (e: ChangeEvent<HTMLInputElement>) => {
    setSing(e.target.value);
  };
  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    if (location && location.state?.update) {
      setWriteState("update");
      // todo : 다이어리 글 상태관리
    } else {
      setWriteState("create");
    }
  }, [location]);

  return (
    <>
      <CreateDiv>
        <StyledH1>일기 {writeState === "create" ? "작성" : "수정"}</StyledH1>
        <Input
          value={title}
          placeholder="제목을 입력해주세요"
          onChangeValue={onChangeTitle}
        />
        <br />
        <TextArea
          value={content}
          placeholder="내용을 입력해주세요"
          onChangeValue={onChangeContent}
        />
        <br />
        <Input
          value={sing}
          placeholder="노래를 입력해주세요(선택)"
          onChangeValue={onChangeSing}
        />
        <br />
        <Input
          value={date}
          type="date"
          placeholder="날짜를 입력해주세요"
          onChangeValue={onChangeDate}
        />
        <br />
        <ButtonWrapper>
          <Button
            buttonColor="point"
            buttonStyle="default"
            onClick={() => navigate(-1)}
          >
            취소
          </Button>
          <Button
            buttonColor="main"
            buttonStyle="default"
            onClick={() => {
              navigate("/");
            }}
            disabled={
              !title || // 제목이 없거나
              !content || // 내용이 없거나
              !date // 날짜가 없을 경우
            }
          >
            {writeState === "create" ? "작성하기" : "수정하기"}
          </Button>
        </ButtonWrapper>
      </CreateDiv>
    </>
  );
};

export default Write;

export const CreateDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

function mutate(arg0: {
  title: string;
  content: string;
  sing: string;
  date: string;
}) {
  throw new Error("Function not implemented.");
}

const StyledH1 = styled.div`
  padding: 50px;
  font-size: 60pt;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

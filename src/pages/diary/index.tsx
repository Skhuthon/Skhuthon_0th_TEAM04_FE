import Input from "@/components/common/Input/Input";
import TextArea from "@/components/common/Input/TextArea";
import { DiaryDetailState } from "@/store";
import { StyledDiv } from "@/styles/common";
import React from "react";
import { useRecoilValue } from "recoil";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";

const Diary = () => {
  const navigate = useNavigate();
  const diaryDetail = useRecoilValue(DiaryDetailState);

  return (
    <StyledDiv>
      <Input
        value={diaryDetail.title}
        onChangeValue={() => {}}
        disabled={true}
      />
      <TextArea
        value={diaryDetail.content}
        onChangeValue={() => {}}
        disabled={true}
      />
      <Button
        buttonStyle="gradient"
        buttonColor="main"
        onClick={() => navigate(-1)}
      >
        돌아가기
      </Button>
    </StyledDiv>
  );
};

export default Diary;

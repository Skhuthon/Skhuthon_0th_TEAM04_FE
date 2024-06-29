import { useLocation, useNavigate } from "react-router-dom";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import HeartIcon from "@/assets/svg/Heart.svg";

const list = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleEditButton = () => {
    mutate({
      title: "",
      date: "",
    });
  };

  return (
    <>
      <ListDiv>
        <StyledH3>제목: {title}</StyledH3>
        <br />
        <StyledH5>날짜: {date}</StyledH5>
        <div>🤍 6</div>
        <div>💬 5</div>
      </ListDiv>
      <ListDiv>
        <StyledH3>제목: {title}</StyledH3>
        <br />
        <StyledH5>날짜: {date}</StyledH5>
        <div>🤍 6</div>
        <div>💬 5</div>
      </ListDiv>
      <ListDiv>
        <StyledH3>제목: {title}</StyledH3>
        <br />
        <StyledH5>날짜: {date}</StyledH5>
        <div>🤍 6</div>
        <div>💬 5</div>
      </ListDiv>
      <ListDiv>
        <StyledH3>제목: {title}</StyledH3>
        <br />
        <StyledH5>날짜: {date}</StyledH5>
        <div>🤍 6</div>
        <div>💬 5</div>
      </ListDiv>
    </>
  );
};

export default list;

function mutate(arg0: { title: string; date: string }) {
  throw new Error("Function not implemented.");
}

export const ListDiv = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 100px;
  padding: 10px;
  border-bottom: ${({ theme }) => theme.boxBorder.bookBorder};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledH3 = styled.div`
  margin-left: 20px;
  padding: 10px;
  font-size: 30pt;
`;

const StyledH5 = styled.div`
  margin-right: 300px;
  padding: 10px;
  font-size: 20pt;
`;

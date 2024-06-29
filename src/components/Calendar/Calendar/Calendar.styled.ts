import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: default;
`;

export const RenderDayView = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
`;

export const DayWrapper = styled(RenderDayView)`
  border-top: ${({ theme }) => `1px solid ${theme.color.main}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.color.main}`};
`;

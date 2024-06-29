import { DAYS_OF_WEEK } from "@/utils/constants";
import Day from "../Day";
import { Dates, YearMonthDate } from "@/types/common";
import * as S from "./Calendar.styled";
import PrevIcon from "@/assets/svg/icon-arrow-left.svg?react";
import NextIcon from "@/assets/svg/icon-arrow-right.svg?react";

export interface Props {
  dates: Dates[];
  yearMonthDate: YearMonthDate;
  onMoveYearMonth: (currentDate: Date, direction: "prev" | "next") => void;
}
const Calendar = ({ dates, yearMonthDate, onMoveYearMonth }: Props) => {
  return (
    <S.Wrapper>
      <S.Header>
        <PrevIcon
          onClick={() => {
            onMoveYearMonth(yearMonthDate.startDate, "prev");
          }}
          style={{ cursor: "pointer" }}
        >
          이전
        </PrevIcon>
        {yearMonthDate.month}월 {yearMonthDate.year}
        <NextIcon
          onClick={() => {
            onMoveYearMonth(yearMonthDate.startDate, "next");
          }}
          style={{ cursor: "pointer" }}
        >
          다음
        </NextIcon>
      </S.Header>
      <S.DayWrapper>
        {DAYS_OF_WEEK.map((day) => (
          <Day key={day} day={day} isDisabled={true} />
        ))}
      </S.DayWrapper>
      <S.RenderDayView>
        {new Array(
          yearMonthDate.firstDay === 0 ? 6 : yearMonthDate.firstDay - 1
        )
          .fill("")
          .map(() => (
            <Day isDisabled={true} />
          ))}
        {dates.map((el) => (
          <Day {...el} isDisabled={false} />
        ))}
      </S.RenderDayView>
    </S.Wrapper>
  );
};

export default Calendar;

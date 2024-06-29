import * as S from "./Day.styled";

export interface Props {
  /** 년 */
  year?: number | string;
  /** 월 */
  month?: number | string;
  /** 날짜 또는 요일 */
  day?: number | string;
  /** 날짜가 얼마나 채워져야 하는지 대한 여부 */
  isFilled?: "none" | "circle" | "fill";
  /** 날짜를 클릭하면 발생할 이벤트 */
  onClick?: () => void;
  isDisabled: boolean;
}

const Day = ({ year, month, day, isFilled = "none", isDisabled }: Props) => {
  return (
    <S.Wrapper
      aria-label={year ? `${year}년 ${month}월 ${day}일` : `${day}요일`}
      isFilled={isFilled}
      disabled={isDisabled}
    >
      {day}
    </S.Wrapper>
  );
};

export default Day;

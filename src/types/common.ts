export interface ToastMessage {
  message: string;
  isOpen: boolean;
}

/** 교환일기 날짜 및 채워짐 여부 */
export interface Dates {
  year: number;
  month: number;
  day: number;
  isFilled?: "none" | "circle" | "fill";
}

/** 달력의 년과 월 달력 */
export interface YearMonth {
  year: number;
  month: number;
}

/** 교환일기 달력 */
export interface YearMonthDate extends YearMonth {
  startDate: Date; // 데이트타입, 첫번째 날짜
  firstDay: number; // 월의 첫번째 요일 0: 일요일, 6:토요일
  lastDate: number; // 한달 개수
}

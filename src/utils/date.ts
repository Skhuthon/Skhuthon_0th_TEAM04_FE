import { YearMonthDate } from "@/types/common";
// import { CALENDAR_DATE_LENGTH } from "./constants";

// /** 해당 월의 달력에 필요한 Day 박스의 개수를 리턴해 주는 함수 */
// export const getDayBoxSize = (yearMonth: YearMonth) => {
//   return yearMonth.firstDay + yearMonth.lastDate <= CALENDAR_DATE_LENGTH.MIN
//     ? CALENDAR_DATE_LENGTH.MIN
//     : CALENDAR_DATE_LENGTH.MAX;
// };

/** 특정 Date에 대해서 년월 정보를 가공해 주는 함수 */
export const getYearMonthInfo = (initialDate: Date): YearMonthDate => {
  const month = initialDate.getMonth() + 1;
  const year = initialDate.getFullYear();
  const startDate = new Date(`${year}-${month}`);
  const firstDay = startDate.getDay();
  const lastDate = new Date(
    initialDate.getFullYear(),
    initialDate.getMonth() + 1,
    0
  ).getDate();

  return { year, month, startDate, firstDay, lastDate };
};

/** 특정 년월의 이전/이후 년월 정보를 change = 1 or -1 (다른 숫자도 가능) */
export const getNewYearMonthInfo = (currentDate: Date, change: number = 1) => {
  const startDate = currentDate;
  startDate.setMonth(startDate.getMonth() + change);

  const newMonthYear = new Date(startDate);

  return getYearMonthInfo(newMonthYear);
};

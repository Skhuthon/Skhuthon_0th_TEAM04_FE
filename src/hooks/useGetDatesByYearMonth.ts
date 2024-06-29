import { Dates, YearMonthDate } from "@/types/common";
import { useEffect, useState } from "react";

export function useGetDatesByYearMonth(yearMonthDate: YearMonthDate) {
  const [dates, setDates] = useState<Dates[]>([]);

  // 주어진 연도와 월에 해당하는 날짜들을 가져오는 함수
  const getDatesInMonth = (yearMonthDate: YearMonthDate): Dates[] => {
    const datesArray: Dates[] = [];

    // 1일부터 마지막 날까지의 날짜를 배열에 추가
    for (let day = 1; day <= yearMonthDate.lastDate; day++) {
      datesArray.push({
        year: yearMonthDate.year,
        month: yearMonthDate.month,
        day,
        isFilled: "none",
      });
    }

    return datesArray;
  };

  useEffect(() => {
    const newDates = getDatesInMonth(yearMonthDate);
    setDates(newDates);
  }, [yearMonthDate]);

  return { dates };
}

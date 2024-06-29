import type { Meta } from "@storybook/react";
import Calendar from ".";
import { useEffect, useState } from "react";
import { YearMonthDate } from "@/types/common";
import { useGetDatesByYearMonth } from "@/hooks/useGetDatesByYearMonth";
import { getNewYearMonthInfo, getYearMonthInfo } from "@/utils/date";

const meta = {
  title: "캘린더/캘린더",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;

export const Default = () => {
  const [yearMonthDate, setYearMonthDate] = useState<YearMonthDate>({
    year: 0,
    month: 0,
    startDate: new Date(),
    firstDay: 0,
    lastDate: 0,
  });

  const { dates } = useGetDatesByYearMonth(yearMonthDate);

  useEffect(() => {
    // 달의 첫 날
    setYearMonthDate(getYearMonthInfo(new Date()));
  }, []);

  const onMoveYearMonth = (currentDate: Date, direction: "prev" | "next") => {
    setYearMonthDate(
      getNewYearMonthInfo(currentDate, direction === "prev" ? -1 : 1)
    );
  };

  return (
    <div style={{ width: "300px", height: "500px" }}>
      {yearMonthDate && (
        <Calendar
          dates={dates}
          yearMonthDate={yearMonthDate}
          onMoveYearMonth={onMoveYearMonth}
        />
      )}
    </div>
  );
};

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

type MonthOfYear = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";
type DayOfMonth =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31";

type DateString = `${number}-${MonthOfYear}-${DayOfMonth}`;

interface DayDetails {
  date: number;
  day: number;
  month: number;
  timestamp: number;
}

type GetDayDetailsFunction = (
  index: number,
  numberOfDays: number,
  firstDay: number,
  year: number,
  month: number
) => DayDetails;

type GetMonthDetailsFunction = (year: number, month: number) => DayDetails[];

type GetNumberOfDaysFunction = (year: number, month: number) => number;

interface DateData {
  date: number;
  month: number;
  year: number;
}

type GetDateFromDateStringFunction = (dateString: DateString) => DateData;

interface NameAbbr {
  abbr: string;
  name: string;
}

type DateInputProps = InputHTMLAttributes<HTMLInputElement> & { "data-cy": string } & {
  isCalenderIconAtStart?: boolean;
  isCalenderIconHidden?: boolean;
};

type FormatType = "long" | "short";

export {
  DateData,
  DateInputProps,
  DateString,
  DayDetails,
  DayOfMonth,
  FormatType,
  GetDateFromDateStringFunction,
  GetDayDetailsFunction,
  GetMonthDetailsFunction,
  GetNumberOfDaysFunction,
  Month,
  MonthOfYear,
  NameAbbr
};

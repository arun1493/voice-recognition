import {
  DateString,
  DayDetails,
  DayOfMonth,
  GetDateFromDateStringFunction,
  GetDayDetailsFunction,
  GetMonthDetailsFunction,
  GetNumberOfDaysFunction,
  Month,
  MonthOfYear,
  NameAbbr
} from "./datePicker.d";
import _memoize from "lodash/memoize";

const todayStartTs = new Date().setHours(0, 0, 0, 0);
const DEFAULT_MONTHS = [
  { name: "January", abbr: "Jan" },
  { name: "February", abbr: "Feb" },
  { name: "March", abbr: "Mar" },
  { name: "April", abbr: "Apr" },
  { name: "May", abbr: "May" },
  { name: "June", abbr: "Jun" },
  { name: "July", abbr: "Jul" },
  { name: "August", abbr: "Aug" },
  { name: "September", abbr: "Sep" },
  { name: "October", abbr: "Oct" },
  { name: "November", abbr: "Nov" },
  { name: "December", abbr: "Dec" }
];
const DEFAULT_DAYS_OF_WEEK = [
  { name: "Sunday", abbr: "Sun" },
  { name: "Monday", abbr: "Mon" },
  { name: "Tuesday", abbr: "Tue" },
  { name: "Wednesday", abbr: "Wed" },
  { name: "Thursday", abbr: "Thu" },
  { name: "Friday", abbr: "Fri" },
  { name: "Saturday", abbr: "Sat" }
];

const getDayDetails: GetDayDetailsFunction = (index, numberOfDays, firstDay, year, month) => {
  const date = index - firstDay;
  const day = index % 7;
  let prevMonth = month - 1;
  let prevYear = year;
  if (prevMonth < 0) {
    prevMonth = 11;
    prevYear--;
  }
  const prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
  const _date = (date < 0 ? prevMonthNumberOfDays + date : date % numberOfDays) + 1;
  const _month = date < 0 ? -1 : date >= numberOfDays ? 1 : 0;
  const timestamp = new Date(year, month + _month, _date).getTime();
  return {
    date: _date,
    day,
    month: _month,
    timestamp
  };
};

const getNumberOfDays: GetNumberOfDaysFunction = (year, month) => {
  const DATE_CONST = 40;
  return DATE_CONST - new Date(year, month, DATE_CONST).getDate();
};

const getMonthDetails: GetMonthDetailsFunction = _memoize(
  (year, month) => {
    const firstDay = new Date(year, month).getDay();
    const numberOfDays = getNumberOfDays(year, month);
    const sixRows = 42;
    const fiveRows = 35;
    const arrSize = firstDay + numberOfDays > fiveRows ? sixRows : fiveRows;
    const monthArray = [];
    for (let i = 0; i < arrSize; i++) {
      monthArray.push(getDayDetails(i, numberOfDays, firstDay, year, month));
    }
    return monthArray;
  },
  (year, month) => `${year}-${month}`
);

const isCurrentDay: (day: DayDetails) => boolean = (day) => {
  return day.timestamp === todayStartTs;
};

const isSelectedDay: (day: DayDetails, selectedDay: number) => boolean = (day, selectedDay) => {
  return day.timestamp === selectedDay;
};

const getDateFromDateString: GetDateFromDateStringFunction = (dateString) => {
  const dateData = dateString.split("-").map((d: string) => parseInt(d, 10));

  return { year: dateData[0], month: dateData[1], date: dateData[2] };
};

const getMonthStr: (month: Month, monthMap?: NameAbbr[]) => string = (month, monthMap = DEFAULT_MONTHS) =>
  monthMap[Math.max(Math.min(11, month), 0)].name;

const getDateStringFromTimestamp: (timestamp: number) => DateString = (timestamp) => {
  const dateObject = new Date(timestamp);
  const monthNum = dateObject.getMonth() + 1;
  const month: MonthOfYear = ((monthNum < 10 ? "0" : "") + monthNum) as MonthOfYear;
  const dateNum = dateObject.getDate();
  const date: DayOfMonth = `${dateNum < 10 ? "0" : ""}${dateNum}` as DayOfMonth;
  const year = dateObject.getFullYear();
  return `${year}-${month}-${date}`;
};

export {
  DEFAULT_DAYS_OF_WEEK,
  DEFAULT_MONTHS,
  getDateFromDateString,
  getDateStringFromTimestamp,
  getDayDetails,
  getMonthDetails,
  getMonthStr,
  getNumberOfDays,
  isCurrentDay,
  isSelectedDay,
  Month,
  todayStartTs
};

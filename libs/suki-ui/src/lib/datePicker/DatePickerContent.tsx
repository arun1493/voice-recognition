import { FunctionComponent } from "react";

import { DatePickerCalendar, MonthPicker } from "./";
import { DayDetails, NameAbbr } from "./datePicker.d";
import { useDatePickerState } from "./datePicker.store";

interface DatePickerContentProps {
  daysOfWeek: NameAbbr[];
  disabledDate?: (day: DayDetails) => boolean;
  isOutsideDaysHidden?: boolean;
  months: NameAbbr[];
  onDateChange?: (timestamp: number) => void;
}

const DatePickerContent: FunctionComponent<DatePickerContentProps> = ({
  daysOfWeek,
  disabledDate = (day) => false,
  isOutsideDaysHidden,
  months,
  onDateChange = (day) => null
}) => {
  const [{ view }] = useDatePickerState();

  return view === "month" ? (
    <MonthPicker months={months} />
  ) : (
    <DatePickerCalendar
      daysOfWeek={daysOfWeek}
      disabledDate={disabledDate}
      isOutsideDaysHidden={isOutsideDaysHidden}
      onChange={onDateChange}
    />
  );
};

export { DatePickerContent, DatePickerContentProps };

export default DatePickerContent;

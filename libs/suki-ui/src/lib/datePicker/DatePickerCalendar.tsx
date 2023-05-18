import _noop from "lodash/noop";
import { FunctionComponent } from "react";

import { DayDetails, NameAbbr } from "./datePicker.d";
import { setDate, useDatePickerState } from "./datePicker.store";
import { getMonthDetails, isCurrentDay, isSelectedDay } from "./datePicker.helpers";
import { DayOfMonth, DayOfWeek, DaysOfMonth, DaysOfWeek, Month } from "./datePickerCalendar.styled";

interface DatePickerCalendarProps {
  daysOfWeek: NameAbbr[];
  disabledDate?: (day: DayDetails) => boolean;
  isOutsideDaysHidden?: boolean;
  onChange?: (timestamp: number) => void;
}

const DatePickerCalendar: FunctionComponent<DatePickerCalendarProps> = ({
  daysOfWeek,
  disabledDate = (day) => false,
  isOutsideDaysHidden = false,
  onChange = (timestamp) => null
}) => {
  const [{ date, month, year }, dispatch] = useDatePickerState();
  const monthDetails: DayDetails[] = getMonthDetails(year, month);

  const handleDateSelect = (day: DayDetails) => {
    if (disabledDate(day)) {
      return;
    }
    dispatch(setDate(day.timestamp));
    onChange(day.timestamp);
  };

  return (
    <Month>
      <DaysOfWeek>
        {daysOfWeek.map((d, i) => (
          <DayOfWeek isBold={true} key={i} size="md">
            <abbr title={d.abbr}>{d.abbr}</abbr>
          </DayOfWeek>
        ))}
      </DaysOfWeek>
      <DaysOfMonth>
        {monthDetails.map((day, index) => {
          const className = disabledDate(day)
            ? "is-disabled"
            : (day.month !== 0 ? " is-secondary" : "") +
              (isCurrentDay(day) ? " is-current" : "") +
              (isSelectedDay(day, date) ? " is-selected" : "");

          const isHidden = day.month !== 0 && isOutsideDaysHidden;

          return (
            <div role="gridcell" key={index}>
              {!isHidden && (
                <DayOfMonth className={className} onClick={() => handleDateSelect(day)}>
                  {day.date}
                </DayOfMonth>
              )}
            </div>
          );
        })}
      </DaysOfMonth>
    </Month>
  );
};

export { DatePickerCalendar };
export default DatePickerCalendar;

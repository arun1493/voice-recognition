import { FunctionComponent } from "react";

import { NameAbbr } from "./datePicker.d";
import { getMonthStr } from "./datePicker.helpers";
import { setMonth, setView, setYear, useDatePickerState } from "./datePicker.store";
import { ArrowIcon, ChevronIcon, DateControls, DateTitle, StyledDatePickerHeader } from "./datePicker.styled";

interface DatePickerHeaderProps {
  hasYearControls: boolean;
  months?: NameAbbr[];
}

const DatePickerHeader: FunctionComponent<DatePickerHeaderProps> = ({ hasYearControls = false, months }) => {
  const [{ month, year, view }, dispatch] = useDatePickerState();

  const title = `${view === "default" ? getMonthStr(month, months) : ""} ${year}`;

  const handleOffsetMonth = (offset: number) => {
    let newYear = year;
    let newMonth = month + offset;

    if (newMonth === -1) {
      newMonth = 11;
      newYear--;
    } else if (newMonth === 12) {
      newMonth = 0;
      newYear++;
    }

    dispatch(setMonth(newMonth));
    dispatch(setYear(newYear));
  };

  const prevMonth = () => handleOffsetMonth(-1);
  const nextMonth = () => handleOffsetMonth(1);
  const prevYear = () => dispatch(setYear(year - 1));
  const nextYear = () => dispatch(setYear(year + 1));

  const showYearControls = hasYearControls || view === "month";
  const showMonthControls = view === "default";

  return (
    <StyledDatePickerHeader>
      <DateTitle isBold={true} onClick={() => dispatch(setView("month"))} size="xl">
        {title}
      </DateTitle>
      <DateControls>
        {showYearControls && (
          <>
            <button onClick={prevYear}>
              <ChevronIcon direction="left" />
            </button>
            <button onClick={nextYear}>
              <ChevronIcon direction="right" />
            </button>
          </>
        )}
        {showMonthControls && (
          <>
            <button onClick={prevMonth}>
              <ArrowIcon direction="left" />
            </button>
            <button onClick={nextMonth}>
              <ArrowIcon direction="right" />
            </button>
          </>
        )}
      </DateControls>
    </StyledDatePickerHeader>
  );
};

export { DatePickerHeader };

export default DatePickerHeader;

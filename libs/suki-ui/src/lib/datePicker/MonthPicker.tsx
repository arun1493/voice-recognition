import { FunctionComponent } from "react";

import { NameAbbr } from "./datePicker.d";
import { StyledMonth, StyledMonths } from "./monthPicker.styled";
import { setMonth, setView, useDatePickerState } from "./datePicker.store";

interface MonthPickerProps {
  months: NameAbbr[];
}

const MonthPicker: FunctionComponent<MonthPickerProps> = ({ months }) => {
  const [{ month: curMonth }, dispatch] = useDatePickerState();

  const handleMonthSelect = (index: number) => () => {
    dispatch(setMonth(index));
    dispatch(setView("default"));
  };

  return (
    <StyledMonths>
      {months.map((month, index) => {
        const className = curMonth === index ? " is-current" : "";
        return (
          <StyledMonth className={className} key={month.abbr} onClick={handleMonthSelect(index)}>
            {month.abbr}
          </StyledMonth>
        );
      })}
    </StyledMonths>
  );
};

export { MonthPicker };

export default MonthPicker;

import _isNil from "lodash/isNil";
import _isNaN from "lodash/isNaN";
import _isEmpty from "lodash/isEmpty";
import _debounce from "lodash/debounce";
import { format as formatDate, isEqual, startOfDay } from "date-fns";
import { forwardRef, FunctionComponent, RefAttributes, useEffect, useRef, useState } from "react";

import {
  ArrowIcon,
  DateFormat,
  StyledDateInput,
  StyledDateInputWrapper,
  StyledTriggerWrapper
} from "./datePicker.styled";
import { DATE_FORMAT } from "../constants";
import { DateInputProps, DateString, FormatType } from "./datePicker.d";
import { setDate, setMonth, setYear, useDatePickerState } from "./datePicker.store";
import { getDateFromDateString, getDateStringFromTimestamp } from "./datePicker.helpers";

interface TriggerWrapperProps {
  customDate?: number | null;
  format?: FormatType;
  inputProps?: DateInputProps;
  isOpen: boolean;
  isTodayAsDefaultDate: boolean;
  onChange: (timestamp: number, shouldCloseModal: boolean) => void;
  onClick: () => void;
  readOnly: boolean;
}

const TriggerWrapper: FunctionComponent<TriggerWrapperProps & RefAttributes<HTMLDivElement>> = forwardRef<
  HTMLDivElement,
  TriggerWrapperProps
>(({ customDate, format, inputProps, isOpen, isTodayAsDefaultDate, onChange, onClick, readOnly }, ref) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isTodayAsDefault, setIsTodayAsDefault] = useState(isTodayAsDefaultDate);

  const [{ date }, dispatch] = useDatePickerState();

  const setDateToInput = (timestamp: number) => {
    const dateString = getDateStringFromTimestamp(timestamp);

    const inputValue = isTodayAsDefault ? dateString : "";
    inputRef.current.value = inputValue;
  };

  useEffect(() => {
    setDateToInput(date);
  }, [date, isTodayAsDefault]);

  useEffect(() => {
    if (!_isNil(customDate) && !_isNaN(customDate)) {
      const formatedDate = formatDate(customDate, DATE_FORMAT.YYYYMMDD);
      updateDate(formatedDate);
    }
  }, [customDate]);

  /*
   * This useEffect is to disable the Delete/Backspace/Space key on the underlying input element.
   * Those keys don't sense with this component and create problems.
   */
  const disableInputActions = (e: KeyboardEvent) =>
    (readOnly || e.key === "Backspace" || e.key === " ") && e.preventDefault();

  useEffect(() => {
    inputRef.current.addEventListener("keydown", disableInputActions);
    inputRef.current.addEventListener("keyup", disableInputActions);
  });

  const updateDateFromInput = () => {
    const dateValue = inputRef.current.value;
    if (!_isEmpty(dateValue)) {
      updateDate(dateValue);
    }
  };

  const updateDate = (dateValue: string) => {
    setIsTodayAsDefault(true);
    const dateData = getDateFromDateString(dateValue as DateString);
    const dateTimestamp = new Date(dateData.year, dateData.month - 1, dateData.date).getTime();

    if (dateData !== null) {
      dispatch(setDate(dateTimestamp));
      dispatch(setYear(dateData.year));
      dispatch(setMonth(dateData.month - 1));
      // Send onchange event if date is changed in input box
      if (customDate && !isEqual(startOfDay(customDate), startOfDay(dateTimestamp))) {
        onChange(dateTimestamp, false);
      }
    }
  };

  const formatOptions: Intl.DateTimeFormatOptions = { weekday: format, year: "numeric", month: format, day: "numeric" };

  return (
    <StyledTriggerWrapper onClick={onClick} ref={ref}>
      <StyledDateInputWrapper isHidden={inputProps?.hidden || !!format}>
        <StyledDateInput
          onChange={_debounce(updateDateFromInput, 1000)}
          onClick={(evt) => evt.preventDefault()}
          ref={inputRef}
          type="date"
          {...inputProps}
          hidden={inputProps.hidden || format}
        />
      </StyledDateInputWrapper>
      {!!format && (
        <DateFormat>
          <div>{new Date(date).toLocaleDateString("en-US", formatOptions)}</div>
          <ArrowIcon direction={isOpen ? "up" : "down"} />
        </DateFormat>
      )}
    </StyledTriggerWrapper>
  );
});

export { TriggerWrapper };

export default TriggerWrapper;

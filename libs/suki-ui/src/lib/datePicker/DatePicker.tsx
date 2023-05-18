import { createRef, FunctionComponent, useState } from "react";

import { DatePickerWrapper } from "./datePicker.styled";
import { DatePickerStateProvider } from "./datePicker.store";
import { DEFAULT_DAYS_OF_WEEK, DEFAULT_MONTHS } from "./datePicker.helpers";
import { DateInputProps, DayDetails, FormatType, NameAbbr } from "./datePicker.d";
import { DatePickerCalendar, DatePickerContent, DatePickerHeader, DatePickerModal, TriggerWrapper } from "./";

interface DatePickerProps {
  customDate?: number | null;
  daysOfWeek?: NameAbbr[];
  disabledDate?: (day: DayDetails) => boolean;
  format?: FormatType;
  hasMask?: boolean;
  hasYearControls?: boolean;
  inputProps?: DateInputProps;
  isModalAlignRight?: boolean;
  isOutsideDaysHidden?: boolean;
  isTodayAsDefaultDate?: boolean;
  months?: NameAbbr[];
  onChange?: (timestamp: number) => void;
  readOnly?: boolean;
}

const DatePicker: FunctionComponent<DatePickerProps> = ({
  customDate,
  daysOfWeek = DEFAULT_DAYS_OF_WEEK,
  disabledDate = (day) => false,
  format,
  hasMask = true,
  hasYearControls = false,
  inputProps = {},
  isModalAlignRight = false,
  isOutsideDaysHidden = false,
  isTodayAsDefaultDate = true,
  months = DEFAULT_MONTHS,
  onChange = (day) => null,
  readOnly = false
}) => {
  const triggerRef = createRef() as React.MutableRefObject<HTMLDivElement>;
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    if (readOnly) return;
    setModalOpen(!isModalOpen);
  };
  const closeModal = () => setModalOpen(false);

  const onDateChange = (date: number, shouldCloseModal = true) => {
    onChange(date);
    shouldCloseModal && closeModal();
  };

  return (
    <DatePickerStateProvider>
      <DatePickerWrapper data-cy="date-picker">
        <TriggerWrapper
          customDate={customDate}
          format={format}
          isOpen={isModalOpen}
          isTodayAsDefaultDate={isTodayAsDefaultDate}
          inputProps={inputProps}
          onClick={toggleModal}
          onChange={onDateChange}
          readOnly={readOnly}
          ref={triggerRef}
        />
        <DatePickerModal
          hasMask={hasMask}
          isModalAlignRight={isModalAlignRight}
          isOpen={isModalOpen}
          onClose={closeModal}
          triggerRef={triggerRef}
        >
          <DatePickerHeader hasYearControls={hasYearControls} months={months} />
          <DatePickerContent
            daysOfWeek={daysOfWeek}
            disabledDate={disabledDate}
            isOutsideDaysHidden={isOutsideDaysHidden}
            months={months}
            onDateChange={onDateChange}
          >
            <DatePickerCalendar
              daysOfWeek={daysOfWeek}
              disabledDate={disabledDate}
              isOutsideDaysHidden={isOutsideDaysHidden}
              onChange={onDateChange}
            />
          </DatePickerContent>
        </DatePickerModal>
      </DatePickerWrapper>
    </DatePickerStateProvider>
  );
};

export { DatePicker, DatePickerProps };

export default DatePicker;

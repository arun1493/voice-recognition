import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { DatePicker, DatePickerProps, NameAbbr } from "@suki-web/suki-ui";

import { logger } from "../../../api";

const ScheduleDatePicker: FunctionComponent<DatePickerProps> = (props) => {
  const { t } = useTranslation();
  const daysOfWeek: NameAbbr[] = t("datePicker.daysOfWeek", { returnObjects: true });
  const months: NameAbbr[] = t("datePicker.months", { returnObjects: true });

  const handleChange = (timestamp: number) => {
    logger.info({ message: "DatePicker.onChange(%o)", payload: timestamp });
  };

  return (
    <DatePicker
      daysOfWeek={daysOfWeek}
      inputProps={{ name: "scheduleDatePicker" }}
      months={months}
      onChange={handleChange}
      {...props}
    />
  );
};

export { ScheduleDatePicker };

export default ScheduleDatePicker;

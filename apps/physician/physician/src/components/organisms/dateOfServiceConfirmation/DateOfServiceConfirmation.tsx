import store from "store2";
import { format } from "date-fns";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogButtonsProps, Text } from "@suki-web/suki-ui";

import { modalsActions } from "../../../redux/modals";
import { DATE_FORMAT, LOCAL_STORE } from "../../../constants";
import { selectCurrentComposition } from "../../../redux/note";
import { appointmentReader, compositionReader, metadataReader } from "../../../readers";

const DateOfServiceConfirmation: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);

  const composition = useSelector(selectCurrentComposition);
  const metadata = compositionReader.metadata(composition);
  const appointment = metadataReader.appointment(metadata);
  const dateOfService = appointmentReader.startsAt(appointment);

  const handleCloseDialog = () => {
    dispatch(modalsActions.hideDateOfServiceConfirmation());
  };

  const buttonProps: DialogButtonsProps = {
    end: { onClick: handleCloseDialog, text: t("modals.dateOfServiceConfirmation.ok") },
    hasCloseBtn: false
  };

  const formattedDateOfService = format(new Date(dateOfService), DATE_FORMAT.MMMMDDYYYY);
  const title = `${t("modals.dateOfServiceConfirmation.title")} ${formattedDateOfService}`;
  const primaryText = t("modals.dateOfServiceConfirmation.primaryText");
  const secondaryText = t("modals.dateOfServiceConfirmation.secondaryText");

  return (
    <Dialog
      buttonProps={buttonProps}
      isOpen={true}
      key="date-of-service-confirmation-modal"
      onClose={handleCloseDialog}
      title={title}
    >
      <Text>{primaryText}</Text>
      {!isEmrUser && <Text>{secondaryText}</Text>}
    </Dialog>
  );
};

export { DateOfServiceConfirmation };

export default DateOfServiceConfirmation;

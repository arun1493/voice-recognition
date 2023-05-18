import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogButtonsProps, Text } from "@suki-web/suki-ui";
import { AppointmentTypes, ClientEmitEventTypes } from "@suki-web/suki-business";

import { queryClient } from "../../../app";
import { useSocket } from "../../../socket";
import { isSecondaryEmr } from "../../../helpers";
import { toastsActions } from "../../../redux/toast";
import { modalsActions } from "../../../redux/modals";
import { selectCurrentComposition } from "../../../redux/note";
import { addPatient, createOrUpdateAppointment, logger } from "../../../api";
import { QUERY_NAMES, TOAST_TYPES, USER_REQUEST_TYPE } from "../../../constants";
import { appointmentReader, compositionReader, metadataReader } from "../../../readers";

const AddToScheduleOrList: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const composition = useSelector(selectCurrentComposition);
  const metadata = compositionReader.metadata(composition);
  const patient = metadataReader.patient(metadata);
  const appointment = metadataReader.appointment(metadata);
  const noteTypeId = metadataReader.noteTypeId(metadata);
  const emrType = metadataReader.emrType(metadata);
  const isEmr = isSecondaryEmr(emrType);

  const compositionId = compositionReader.compositionId(composition);
  const { transmitEvent } = useSocket();

  const patientMutation = useMutation(addPatient, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_NAMES.PATIENTS_LIST]);
    },
    onError: (error) => {
      // TODO[Rohit]: Add Appropriate Error Message later
      dispatch(toastsActions.add({ message: t("modals.listOrScheduleModal.error.list"), type: TOAST_TYPES.INFO }));
      logger.error({ message: "", payload: error });
    },
    onSettled: () => {
      handleCloseDialog();
    }
  });

  const appointmentMutation = useMutation(createOrUpdateAppointment, {
    onError: (error) => {
      // TODO[Rohit]: Add Appropriate Error Message later
      dispatch(toastsActions.add({ message: t("modals.listOrScheduleModal.error.schedule"), type: TOAST_TYPES.INFO }));
      logger.error({ message: "", payload: error });
    },
    onSettled: () => {
      handleCloseDialog();
    }
  });

  const handleCloseDialog = () => {
    dispatch(modalsActions.hideAddToScheduleOrList());
  };

  const handleAddToSchedule = () => {
    appointmentMutation.mutate({
      appointment: {
        ...appointment,
        ownerId: appointmentReader.ownerId(appointment),
        patientId: appointmentReader.patientId(appointment),
        type: AppointmentTypes.NON_EMR_USER_GENERATED
      }
    });
  };

  const handleAddToList = () => {
    patientMutation.mutate({ patients: [patient] });
  };

  const buttonProps: DialogButtonsProps = {
    end: { onClick: handleAddToSchedule, text: t("modals.listOrScheduleModal.button.schedule") },
    hasCloseBtn: true,
    start: { onClick: handleAddToList, text: t("modals.listOrScheduleModal.button.list") }
  };
  let title = t("modals.listOrScheduleModal.title");

  if (isEmr) {
    delete buttonProps.end;
    title = t("modals.listOrScheduleModal.emrTitle");
  }

  return (
    <Dialog buttonProps={buttonProps} isOpen={true} key="add-to-list-or-schedule-modal" onClose={handleCloseDialog}>
      <Text>{title}</Text>
    </Dialog>
  );
};

export { AddToScheduleOrList };

export default AddToScheduleOrList;

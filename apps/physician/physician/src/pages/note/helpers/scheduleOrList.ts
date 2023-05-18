import store from "store2";
import _get from "lodash/get";
import _find from "lodash/find";
import _isEmpty from "lodash/isEmpty";
import { differenceInCalendarDays } from "date-fns";
import { AppointmentTypes } from "@suki-web/suki-business";

import { isEpicEMR } from "../../../helpers";
import { LOCAL_STORE } from "../../../constants";
import { noteActions } from "../../../redux/note";
import { modalsActions } from "../../../redux/modals";
import { Dispatch, Metadata, Patients } from "../../../types";
import { getAppointments, getPatientList } from "../../../api";
import { appointmentReader, metadataReader, patientReader } from "../../../readers";

async function handleAddPatientToScheduleOrList(
  metadata: Metadata,
  dispatch: Dispatch,
  isEmr: boolean,
  isNewNote: boolean
): Promise<void> {
  const appointment = metadataReader.appointment(metadata);
  const patient = metadataReader.patient(metadata);
  const emrType = metadataReader.emrType(metadata) || store.get(LOCAL_STORE.EMR_TYPE);
  const patientId = patientReader.id(patient);

  if (_isEmpty(patientId)) {
    return;
  }

  // if its not a new note don't show the dialog
  if (!isNewNote) {
    return;
  }

  if (!_isEmpty(appointment)) {
    // If patient is on schedule,the note can be attached to their most recent appointment on the Schedule.
    // any appointment type other than default (0) (i.e. typeValue > 0) is already part of schedule
    // S2 does not have latest appointment, rather than changing it client side we will get it from sms
    const appointmentsFromSms = await getAppointments({
      includeStatuses: "true",
      appointmentId: appointmentReader.id(appointment)
    });
    const appointmentFromSms = _get(appointmentsFromSms, "appointment");
    const appointmentType = appointmentReader.type(appointmentFromSms);
    const appointmentStartsAt = appointmentReader.startsAt(appointmentFromSms);

    if (!_isEmpty(appointmentStartsAt)) {
      const appointmentDate = new Date(appointmentStartsAt);
      const now = new Date();
      const diffInDays = differenceInCalendarDays(now, appointmentDate);

      // If an old appointment gets attached compared to today's date then, show the
      // modal to just to make the user aware as to what has happened.
      if (diffInDays && isNewNote) {
        dispatch(noteActions.setIsNewNote(false));
        dispatch(modalsActions.showDateOfServiceConfirmation());
        return;
      }
    }

    if (appointmentType !== AppointmentTypes.DEFAULT) {
      return;
    }
  }

  // Else, if the patient is on the List but not the Schedule, the note can be attached to that
  // since Epic do not have patient list, so return
  if (isEpicEMR(emrType)) {
    return;
  }

  // check if patient is in patient list
  getPatientList().then((patients: Patients) => {
    const isPatientInList = _find(patients, (patient) => patientReader.id(patient) === patientId);

    if (!_isEmpty(isPatientInList)) {
      return;
    }

    //  Else, if (the patient is on neither the List nor the Schedule
    // – show popup to add to list or schedule (non-emr only))
    dispatch(modalsActions.showAddToScheduleOrList());
  });
}

export { handleAddPatientToScheduleOrList };

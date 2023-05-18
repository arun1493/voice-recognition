import _reduce from "lodash/reduce";
import _isEmpty from "lodash/isEmpty";

import { Appointment } from "../../../../../types";
import { appointmentReader } from "../../../../../readers";

const getScheduleCompositionIds = (scheduleAppointments: Array<Appointment>): Array<string> =>
  _reduce(
    scheduleAppointments,
    (compositionIds: Array<string>, appointment: Appointment) => {
      const appointmentCompositionIds = appointmentReader.compositionIds(appointment);
      if (_isEmpty(appointmentCompositionIds)) {
        return compositionIds;
      }
      return [...compositionIds, ...appointmentCompositionIds];
    },
    []
  );

export { getScheduleCompositionIds };

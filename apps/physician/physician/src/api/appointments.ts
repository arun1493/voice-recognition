import axios from "./config";
import { Appointment } from "../types";

type AppointmentsInput = {
  appointmentId?: string;
  filterInternalAppointments?: string;
  includeStatuses?: string;
  startsAtRangeBeginning?: string;
  startsAtRangeEnd?: string;
};

const createOrUpdateAppointment = (appointment: { appointment: Appointment }) => {
  return axios.post("/appointments", appointment);
};

const getAppointments = (appointmentsInput: AppointmentsInput) => {
  const {
    appointmentId = "",
    filterInternalAppointments,
    includeStatuses,
    startsAtRangeBeginning,
    startsAtRangeEnd
  } = appointmentsInput;
  const params = new URLSearchParams();

  includeStatuses && params.append("includeStatuses", includeStatuses);
  startsAtRangeBeginning && params.append("startsAtRangeBeginning", startsAtRangeBeginning);
  startsAtRangeEnd && params.append("startsAtRangeEnd", startsAtRangeEnd);
  appointmentId && params.append("appointmentId", appointmentId);
  filterInternalAppointments && params.append("filterInternalAppointments", "true");

  return axios.get("/patients/schedule", { params }).then((response) => response.data);
};

export { createOrUpdateAppointment, getAppointments };

import _isEmpty from "lodash/isEmpty";

import { CardType } from "../constants";
import { Card, Composition } from "../types";
import { appointmentReader, compositionReader, metadataReader, patientReader } from "../readers";

type Vital = { content: string; error: string; type: string; value: string };

const isVitalWithoutError = (vital: Vital) => !vital.error;

const parseVitalsValues = (vital: Vital) => {
  const [name, value] = vital.content?.split(":");
  return { name, value };
};

const isNonEmptyVitalValue = (vital: { name: string; value: string }) => !!vital.value?.trim();

const convertVitalsData = (vitals: Array<Vital>) => {
  if (_isEmpty(vitals) || vitals?.every((vital) => vital.error)) {
    return {
      data: [
        {
          type: CardType.VITALS,
          content: []
        }
      ]
    };
  }

  const content = vitals.filter(isVitalWithoutError).map(parseVitalsValues).filter(isNonEmptyVitalValue);

  const data: Card = {
    type: CardType.VITALS,
    content
  };

  return { data: [data] };
};

const getCardQueryParams = (composition: Composition) => {
  const metadata = compositionReader.metadata(composition);
  const appointment = metadataReader.appointment(metadata);
  const patient = metadataReader.patient(metadata);

  return {
    emrAppointmentDepartmentId: appointmentReader.emrDepartmentId(appointment),
    emrEncounterId: appointmentReader.emrEncounterId(appointment),
    emrPatientId: patientReader.mrn(patient),
    sukiAppointmentId: appointmentReader.id(appointment),
    sukiPatientId: patientReader.id(patient),
    refreshData: true
  };
};

export { getCardQueryParams, convertVitalsData };

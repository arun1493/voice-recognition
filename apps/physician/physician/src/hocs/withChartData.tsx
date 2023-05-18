import store from "store2";
import _isEmpty from "lodash/isEmpty";
import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { EMPTY_OBJECT, Paths } from "@suki-web/suki-business";

import {
  getPatientAllergies,
  getPatientMedicalHistory,
  getPatientMedications,
  getPatientSurgicalHistory,
  getPatientVitals,
  logger
} from "../api";
import { noteActions } from "../redux/note";
import { getCardQueryParams } from "../helpers";
import { compositionReader, metadataReader } from "../readers";
import { CardType, LOCAL_STORE, QUERY_NAMES } from "../constants";

function withChartData(WrappedComponent: FunctionComponent<any>): FunctionComponent {
  return (props: any) => {
    const { composition, loading } = props;

    const dispatch = useDispatch();
    const location = useLocation();
    const isPatientProfilePage = location.pathname.includes(Paths.PatientProfile);
    const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);

    let shouldFetchCardsData;
    let queryParams = EMPTY_OBJECT as any;

    if (isPatientProfilePage) {
      const { patientId = "" } = useParams<{ patientId: string }>();
      shouldFetchCardsData = !!(isEmrUser && patientId);
      queryParams = {
        sukiPatientId: patientId
      };
    } else {
      const metadata = compositionReader.metadata(composition);
      const patientInfo = metadataReader.patient(metadata);
      shouldFetchCardsData = (isEmrUser && !loading && !_isEmpty(composition) && !_isEmpty(patientInfo)) || false;
      queryParams = getCardQueryParams(composition);
    }

    // Allergies
    useQuery([QUERY_NAMES.PATIENT_ALLERGIES, queryParams], () => getPatientAllergies(queryParams), {
      enabled: shouldFetchCardsData,
      staleTime: 0,
      onError: (error) => logger.error({ message: "Error fetching allergies", payload: error }),
      onSuccess: (allergies) =>
        dispatch(noteActions.setCardsByType({ type: CardType.ALLERGIES, cards: allergies?.data || [] }))
    });

    // Medical History
    useQuery([QUERY_NAMES.PATIENT_MEDICAL_HISTORY, queryParams], () => getPatientMedicalHistory(queryParams), {
      enabled: shouldFetchCardsData,
      staleTime: 0,
      onError: (error) => logger.error({ message: "Error fetching medical history", payload: error }),
      onSuccess: (medicalHistory) =>
        dispatch(noteActions.setCardsByType({ type: CardType.PAST_MEDICAL_HISTORY, cards: medicalHistory?.data }))
    });

    // Medications
    useQuery([QUERY_NAMES.PATIENT_MEDICATIONS, queryParams], () => getPatientMedications(queryParams), {
      enabled: shouldFetchCardsData,
      staleTime: 0,
      onError: (error) => logger.error({ message: "Error fetching medications", payload: error }),
      onSuccess: (medications) =>
        dispatch(noteActions.setCardsByType({ type: CardType.CURRENT_MEDICATION, cards: medications?.data }))
    });

    // Surgical History
    useQuery([QUERY_NAMES.PATIENT_SURGICAL_HISTORY, queryParams], () => getPatientSurgicalHistory(queryParams), {
      enabled: shouldFetchCardsData,
      staleTime: 0,
      onError: (error) => logger.error({ message: "Error fetching surgical history", payload: error }),
      onSuccess: (surgicalHistory) =>
        dispatch(noteActions.setCardsByType({ type: CardType.PAST_SURGICAL_HISTORY, cards: surgicalHistory?.data }))
    });

    // Vitals
    useQuery([QUERY_NAMES.PATIENT_VITALS, queryParams], () => getPatientVitals(queryParams), {
      enabled: shouldFetchCardsData,
      staleTime: 0,
      onError: (error) => logger.error({ message: "Error fetching vitals", payload: error }),
      onSuccess: (vitals) => dispatch(noteActions.setCardsByType({ type: CardType.VITALS, cards: vitals?.data }))
    });

    return <WrappedComponent {...props} />;
  };
}

export { withChartData };

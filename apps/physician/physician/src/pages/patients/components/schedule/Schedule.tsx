import store from "store2";
import _get from "lodash/get";
import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { endOfDay, formatISO, startOfDay } from "date-fns";
import { Icon, Link, PatientModes } from "@suki-web/suki-ui";
import { FunctionComponent, MouseEvent, useEffect, useRef, useState } from "react";

import {
  StyledCenterContent,
  StyledEmptyPlaceHolder,
  StyledListContainer,
  StyledListHeader,
  StyledZeroStateText
} from "../../patients.styled";
import { Appointment } from "../../../../types";
import { selectEmrType } from "../../../../redux/emr";
import { useNavigatorOnline } from "../../../../hooks";
import { toastsActions } from "../../../../redux/toast";
import { patientsActions } from "../../../../redux/patients";
import { getAppointments, refreshEpicNotes } from "../../../../api";
import { ListPanel, ScheduleDatePicker } from "../../../../components/organisms";
import { LOCAL_STORE, Pages, QUERY_NAMES, TOAST_TYPES } from "../../../../constants";
import { getAge, getFullName, getGender, getRoute, isEpicEMR } from "../../../../helpers";

const Schedule: FunctionComponent = () => {
  const now = new Date().getTime();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emrType = useSelector(selectEmrType) || store.get(LOCAL_STORE.EMR_TYPE);
  const datePickerTimestamp = store.get(LOCAL_STORE.SCHEDULE_DATE);
  const [customDate, setCustomDate] = useState<number | undefined>(datePickerTimestamp || now);
  const [datePickerDate, setDatePickerDate] = useState<number>(datePickerTimestamp || now);
  const [hasScrollBar, setHasScrollBar] = useState(false);

  const { isOffline } = useNavigatorOnline();

  const scheduleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const startsAtRangeBeginning = formatISO(startOfDay(datePickerDate));
  const startsAtRangeEnd = formatISO(endOfDay(datePickerDate));
  const includeStatuses = "true";
  const filterInternalAppointments = "true";

  const {
    data,
    isLoading,
    isRefetching,
    refetch: reFetchSchedule,
    remove: removeAppointmentsFromCache
  } = useQuery(
    [QUERY_NAMES.SCHEDULED_APPOINTMENTS, startsAtRangeBeginning, startsAtRangeEnd],
    () => getAppointments({ filterInternalAppointments, includeStatuses, startsAtRangeBeginning, startsAtRangeEnd }),
    {
      staleTime: 0
    }
  );

  const appointmentList = _get(data, "results");

  const isDataLoading = isRefetching || isLoading;

  useEffect(() => {
    if (!isEpicEMR(emrType)) {
      return;
    }

    const payload = {
      sukiUserId: store.get(LOCAL_STORE.USER_ID),
      fromDate: startsAtRangeBeginning,
      toDate: startsAtRangeEnd
    };

    removeAppointmentsFromCache();
    refreshEpicNotes(payload).finally(() => {
      reFetchSchedule();
    });
  }, [datePickerDate]);

  useEffect(() => {
    if (datePickerTimestamp) {
      setDatePickerDate(datePickerTimestamp);
    }
  }, [datePickerTimestamp]);

  useEffect(() => {
    !isLoading && dispatch(patientsActions.setAppointments(appointmentList));
  }, [appointmentList, isLoading]);

  useEffect(() => {
    const scheduleHeight = _get(scheduleRef, "current.clientHeight", 0);
    const containerHeight = _get(containerRef, "current.clientHeight", 0);
    setHasScrollBar(containerHeight < scheduleHeight);
  }, [containerRef, isDataLoading, scheduleRef]);

  const setToday = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCustomDate(now);
    store.set(LOCAL_STORE.SCHEDULE_DATE, now);
  };

  const setDates = (timestamp: number) => {
    store.set(LOCAL_STORE.SCHEDULE_DATE, timestamp);
    setCustomDate(timestamp);
  };

  const renderAppointmentsList = (appointmentData: Appointment, index: number) => {
    const { id, patient, startsAt, noteStatus } = appointmentData;
    const { id: patientId, person } = patient;
    const name = getFullName(person);
    const gender = getGender(person.gender);
    const age = getAge(person.dateOfBirth);

    const handleOnAppointmentClick = () => {
      if (isOffline) {
        dispatch(toastsActions.add({ message: t("errors.s2.openAppointment"), type: TOAST_TYPES.ERROR }));
        return;
      }
      store.set(LOCAL_STORE.APPOINTMENT_ID, id);
      const patientProfileRoute = getRoute(Pages.PatientProfile, { patientId });
      if (patientProfileRoute) {
        navigate(patientProfileRoute, { state: { from: Pages.Schedule } });
      }
    };

    return (
      <ListPanel
        age={age}
        fullName={name}
        gender={gender}
        key={`schedule-appointment-${id}`}
        onClick={handleOnAppointmentClick}
        startsAt={startsAt}
        status={noteStatus}
        testId={`list-panel-schedule-${index}`}
        type={PatientModes.SCHEDULE}
      />
    );
  };

  const renderScheduleContent = () => {
    if (isLoading) {
      return (
        <StyledCenterContent>
          <Icon data-cy="loader-icon" icon="loader" />
        </StyledCenterContent>
      );
    }

    if (_isEmpty(appointmentList)) {
      return <StyledZeroStateText>{t("pages.patients.schedule.emptySchedule")}</StyledZeroStateText>;
    }

    return (
      <StyledListContainer hasScrollBar={hasScrollBar} ref={containerRef}>
        <div ref={scheduleRef}>
          {_map(appointmentList, renderAppointmentsList)}
          <StyledEmptyPlaceHolder />
        </div>
      </StyledListContainer>
    );
  };

  return (
    <>
      <StyledListHeader>
        <ScheduleDatePicker customDate={customDate} format={"long"} onChange={setDates} />
        <Link onClick={setToday} to="/">
          {t("pages.patients.schedule.today")}
        </Link>
      </StyledListHeader>

      {renderScheduleContent()}
    </>
  );
};

export { Schedule };

export default Schedule;

import _map from "lodash/map";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Dialog, Icon, PatientModes, Text } from "@suki-web/suki-ui";
import { FunctionComponent, useEffect, useRef, useState } from "react";

import {
  StyledCenterContent,
  StyledEmptyPlaceHolder,
  StyledListContainer,
  StyledZeroStateText
} from "../../patients.styled";
import { Patient } from "../../../../types";
import { queryClient } from "../../../../app";
import { useNavigatorOnline } from "../../../../hooks";
import { toastsActions } from "../../../../redux/toast";
import { tooltipActions } from "../../../../redux/tooltip";
import { patientsActions } from "../../../../redux/patients";
import { ListPanel } from "../../../../components/organisms";
import { noteTypesActions } from "../../../../redux/noteTypes";
import { deletePatient, getPatientList } from "../../../../api";
import { Pages, QUERY_NAMES, TOAST_TYPES } from "../../../../constants";
import { getAge, getFullName, getGender, getRoute } from "../../../../helpers";

const List: FunctionComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [itemId, setItemId] = useState("");
  const [hasScrollBar, setHasScrollBar] = useState(false);

  const { isOffline } = useNavigatorOnline();

  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(tooltipActions.setIsWithDelay(true));
  }, []);

  const onMouseLeave = () => dispatch(tooltipActions.setIsWithDelay(true));

  const { data, isLoading, isRefetching } = useQuery([QUERY_NAMES.PATIENTS_LIST], getPatientList);

  useEffect(() => {
    !isLoading && dispatch(patientsActions.setPatients(data));
  }, [data, isLoading]);

  const mutation = useMutation(deletePatient, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_NAMES.PATIENTS_LIST]);
    }
  });

  const showLoader = isRefetching || isLoading || mutation.isLoading;

  useEffect(() => {
    const listHeight = _get(listRef, "current.clientHeight", 0);
    const containerHeight = _get(containerRef, "current.clientHeight", 0);
    setHasScrollBar(containerHeight < listHeight);
  }, [containerRef, listRef, showLoader]);

  const handleCancel = () => setOpen(false);

  const onRemove = () => {
    mutation.mutate(itemId);
    handleCancel();
  };

  const onRemoveItem = (id: string) => {
    setItemId(id);
    setOpen(true);
  };

  const markedUpBtnProps = {
    end: { onClick: onRemove, text: t("modals.deleteModal.button.delete") },
    start: { onClick: handleCancel, text: t("modals.deleteModal.button.cancel") }
  };

  const handlePatientItemClick = (patientId: string) => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.s2.openAppointment"), type: TOAST_TYPES.ERROR }));
      return;
    }
    dispatch(noteTypesActions.setIsFromPatientList(true));
    const patientProfileRoute = getRoute(Pages.PatientProfile, { patientId });
    patientProfileRoute && navigate(patientProfileRoute, { state: { from: Pages.List } });
  };

  const renderPatientsList = (patientData: Patient, index: number) => {
    const { id, person, noteStatus } = patientData;
    const age = getAge(person.dateOfBirth);
    const gender = getGender(person.gender);
    const name = getFullName(person);

    return (
      <ListPanel
        age={age}
        fullName={name}
        gender={gender}
        id={id}
        key={`patients-list-${id}`}
        onClick={() => handlePatientItemClick(id)}
        onDelete={() => onRemoveItem(id)}
        status={noteStatus}
        testId={`list-panel-list-${index}`}
        type={PatientModes.PATIENTS_LIST}
      />
    );
  };

  if (showLoader) {
    return (
      <StyledCenterContent>
        <Icon icon="loader" size="lg" />
      </StyledCenterContent>
    );
  }

  if (_isEmpty(data)) {
    return (
      <StyledZeroStateText>
        {t("pages.patients.list.emptyPatientList.text1")}
        {t("pages.patients.list.emptyPatientList.text2")}
      </StyledZeroStateText>
    );
  }

  return (
    <>
      <StyledListContainer hasScrollBar={hasScrollBar} onMouseLeave={onMouseLeave} ref={containerRef}>
        <div ref={listRef}>
          {_map(data, renderPatientsList)}
          <StyledEmptyPlaceHolder />
        </div>
      </StyledListContainer>
      <Dialog buttonProps={markedUpBtnProps} isOpen={isOpen} key="delete-patient-modal" onClose={handleCancel}>
        <Text>{t("modals.deleteModal.deletePatientTitle")}</Text>
      </Dialog>
    </>
  );
};

export default List;

export { List };

import _get from "lodash/get";
import _noop from "lodash/noop";
import _isEmpty from "lodash/isEmpty";
import _debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, useBreakpoint } from "@suki-web/suki-ui";

import { Patient } from "../../../types";
import { patientReader } from "../../../readers";
import { selectEmrState } from "../../../redux/emr";
import { logger, searchPatient } from "../../../api";
import { modalsActions } from "../../../redux/modals";
import { StyledModalContent } from "./searchPatientsInHeader.styled";
import { GlobalPatientsSearch } from "../../molecules/globalPatientsSearch";
import { getRoute, shouldShowEmrIntegrationToolbar } from "../../../helpers";
import { getSearchPatientsModalMargins } from "./searchPatientsInHeader.helpers";
import { Pages, QUERY_NAMES, SEARCH_PATIENTS_RESULTS_LIMIT, searchPatientsModalWidth } from "../../../constants";

const SearchPatientsInHeader: FunctionComponent = () => {
  const breakpoint = useBreakpoint();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const emrState = useSelector(selectEmrState);
  const isEmrPanelShown = shouldShowEmrIntegrationToolbar(emrState);

  const { data, isFetching } = useQuery(
    [QUERY_NAMES.SEARCH_PATIENTS, searchValue, SEARCH_PATIENTS_RESULTS_LIMIT],
    () => searchPatient(searchValue, SEARCH_PATIENTS_RESULTS_LIMIT),
    {
      enabled: !_isEmpty(searchValue),
      onError: (error) => logger.error({ message: "error fetching patients", payload: error })
    }
  );
  const patients = _get(data, "data.results");

  const handleClose = () => {
    dispatch(modalsActions.hideSearchPatientsInHeaderModal());
  };

  const handleSearchInput = _debounce(async (value: string) => {
    setSearchValue(value);
  }, 200);

  const handleGoToPatientPage = (selectedPatient: Patient) => {
    const patientId = patientReader.id(selectedPatient);
    if (patientId) {
      const patientProfileRoute = getRoute(Pages.PatientProfile, { patientId });
      patientProfileRoute && navigate(patientProfileRoute);
      handleClose();
    }
  };

  return (
    <Modal
      closeDuration={1}
      hasMask={false}
      headerHeight={40}
      height="auto"
      isMaskClosable={true}
      isMaskTransparent={true}
      isWithTooltip={false}
      margin={getSearchPatientsModalMargins(breakpoint, isEmrPanelShown)}
      onClose={_noop}
      onModalClose={handleClose}
      position="tc"
      testId="search-patients-in-header"
      width={searchPatientsModalWidth[breakpoint]}
    >
      <StyledModalContent hasPadding={false}>
        <GlobalPatientsSearch
          hasBorder={false}
          hasCloseInInput={true}
          hasShadow={false}
          onPatientClick={handleGoToPatientPage}
          onSearch={handleSearchInput}
          patients={patients}
          prefixIcon={isFetching ? "loader" : "search"}
          value={searchValue}
        />
      </StyledModalContent>
    </Modal>
  );
};

export { SearchPatientsInHeader };

export default SearchPatientsInHeader;

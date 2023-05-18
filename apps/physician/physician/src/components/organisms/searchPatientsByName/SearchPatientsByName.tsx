import _get from "lodash/get";
import _debounce from "lodash/debounce";
import _isEmpty from "lodash/isEmpty";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, useState } from "react";
import { ModalHeader, useBreakpoint } from "@suki-web/suki-ui";

import { Patient } from "../../../types";
import { logger, searchPatient } from "../../../api";
import { modalsActions } from "../../../redux/modals";
import { GlobalPatientsSearch } from "../../molecules/globalPatientsSearch";
import { QUERY_NAMES, SEARCH_RESULTS_LIMIT, searchPatientsModalWidth } from "../../../constants";
import { StyledEmptyResults, StyledModal, StyledModalContent } from "./searchPatientsByName.styled";

interface SearchPatientProps {
  onAddPatient: (patient: Patient) => void;
}

const SearchPatientsByName: FunctionComponent<SearchPatientProps> = ({ onAddPatient }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const breakpoint = useBreakpoint();

  const [searchValue, setSearchValue] = useState("");

  const { data, isFetching } = useQuery(
    [QUERY_NAMES.SEARCH_PATIENTS, searchValue, SEARCH_RESULTS_LIMIT],
    () => searchPatient(searchValue, SEARCH_RESULTS_LIMIT),
    {
      enabled: !_isEmpty(searchValue),
      onError: (error) => logger.error({ message: "error fetching patients", payload: error })
    }
  );

  const patients = _get(data, "data.results");

  const handleClose = () => {
    dispatch(modalsActions.hideSearchPatientsModal());
  };

  const handleSearchInput = _debounce(async (value: string) => {
    setSearchValue(value);
  }, 200);

  const handleAddPatient = (selectedPatient: Patient) => {
    if (selectedPatient) {
      onAddPatient(selectedPatient);
      handleClose();
    }
  };

  const noResultsFound = _isEmpty(patients) && searchValue && !isFetching;

  return (
    <StyledModal onClose={handleClose} position="tc" width={searchPatientsModalWidth[breakpoint]}>
      <ModalHeader height={56} title={t("modals.searchPatients.title")} />
      <StyledModalContent height={"auto"}>
        <GlobalPatientsSearch
          hasBorder={true}
          hasCloseInInput={false}
          hasShadow={false}
          onPatientClick={handleAddPatient}
          onSearch={handleSearchInput}
          patients={patients}
          prefixIcon={isFetching ? "loader" : "search"}
          value={searchValue}
        />
        {noResultsFound && (
          <StyledEmptyResults isBold={true} size="lg">
            {t("modals.searchPatients.emptyResults")}
          </StyledEmptyResults>
        )}
      </StyledModalContent>
    </StyledModal>
  );
};

export { SearchPatientsByName };

export default SearchPatientsByName;

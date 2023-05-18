import {
  Icon,
  ICON_COLORS,
  IconType,
  Modal,
  ModalContent,
  ModalHeader,
  NavigationIcon,
  ScreenSize,
  Text,
  useBreakpoint,
  useBreakpointIncludes
} from "@suki-web/suki-ui";
import store from "store2";
import _isEmpty from "lodash/isEmpty";
import _debounce from "lodash/debounce";
import { useTranslation } from "react-i18next";
import { batch, useDispatch, useSelector } from "react-redux";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { ClientEmitEventTypes, EMPTY_ARRAY, SectionUpdateTypes } from "@suki-web/suki-business";

import {
  StyledBackButton,
  StyledEmptySection,
  StyledHeaderContainer,
  StyledPoweredByText,
  StyledSearchIcon,
  StyledSearchInput,
  StyledSubLevelText
} from "./iCD10LookupModal.styled";
import { formatCode } from "./helpers";
import { useSocket } from "../../../socket";
import { ICD10List } from "./components/iCD10List";
import { modalsActions } from "../../../redux/modals";
import { LookupItem, NoteSection } from "../../../types";
import { getEdgCodes, logger, searchDiagnoses } from "../../../api";
import { StyledCodeLabel } from "./components/iCD10List/iCD10List.styled";
import { getDiagnosisText, isEpicEMR, saveEDGMappingCodes } from "../../../helpers";
import { noteActions, selectActiveSectionId, selectCurrentComposition } from "../../../redux/note";
import { compositionReader, diagnosisReader, metadataReader, sectionReader } from "../../../readers";
import { DEBOUNCE_DELAY, EMPTY_STRING, LOCAL_STORE, PROBLEM_STATUSES, USER_REQUEST_TYPE } from "../../../constants";

const modalWidth: Record<ScreenSize, number | "auto" | "100vw"> = {
  xxs: "100vw",
  xs: 384,
  sm: 504,
  md: 560,
  lg: 600,
  xl: 684
};

const ICD10LookupModal: FunctionComponent = () => {
  const { t } = useTranslation();
  const { transmitEvent } = useSocket();
  const breakpoint = useBreakpoint();
  const dispatch = useDispatch();

  const [diagnoses, setDiagnoses] = useState(EMPTY_ARRAY);
  const [children, setChildren] = useState<any>(EMPTY_ARRAY);
  const [suggestions, setSuggestions] = useState(EMPTY_ARRAY);
  const [isLoading, setIsLoading] = useState(false);

  const emptyResults = _isEmpty(diagnoses) && _isEmpty(suggestions);

  const activeSectionId = useSelector(selectActiveSectionId);
  const composition = useSelector(selectCurrentComposition);

  const sections = compositionReader.sections(composition) || EMPTY_ARRAY;
  const compositionId = compositionReader.compositionId(composition);
  const currentSection = sections?.find((section: NoteSection) => section.id === activeSectionId);
  const metadata = compositionReader.metadata(composition);
  const noteTypeId = metadataReader.noteTypeId(metadata);
  const isSubLevel = !_isEmpty(children);
  const icon: IconType = isLoading ? "loader" : "search";
  const isXXSScreen = useBreakpointIncludes(ScreenSize.XXS);

  const [hasBorder, setHasBorder] = useState(false);

  const [searchQuery, setSearchQuery] = useState(currentSection?.name || EMPTY_STRING);

  useEffect(() => {
    dispatch(noteActions.setIsIgnoredOnBlur(true));
    handleSearchCode(searchQuery);
  }, []);

  const onItemClick = (item: LookupItem, isSubItem: boolean) => {
    const { diagnosis } = item;
    if (isSubItem) {
      const newChildren = {
        children: item.children,
        diagnosis
      };
      setChildren([newChildren, ...children]);
      return;
    }

    const sectionData = { ...currentSection, updateType: SectionUpdateTypes.ONLY_DIAGNOSIS, id: activeSectionId };

    sectionData.diagnosisEntry = {
      diagnosis: {
        ...diagnosis,
        problemLabel: sectionReader.sectionName(currentSection as NoteSection)
      },
      confirmStatus: PROBLEM_STATUSES.CONFIRMED
    };
    const requestProps = {
      compositionId,
      sectionData,
      sectionId: activeSectionId
    };

    transmitEvent({
      type: ClientEmitEventTypes.USER_REQUEST,
      data: {
        ...requestProps,
        noteTypeId,
        requestType: USER_REQUEST_TYPE.UPDATE_SECTION
      }
    });

    batch(() => {
      dispatch(modalsActions.hideICD10LookupModal());
      dispatch(noteActions.updateSection(requestProps));
    });

    const icdCode = diagnosisReader.icdCode(diagnosis);
    const emrType = store.get(LOCAL_STORE.EMR_TYPE);
    const isEpic = isEpicEMR(emrType);
    if (isEpic) {
      getEdgCodes(icdCode)
        .then((edgData) => saveEDGMappingCodes(dispatch, icdCode, edgData))
        .catch((error) => logger.error({ message: "Failed to fetch EDG codes", payload: error }));
    }
  };

  const handleClose = () => dispatch(modalsActions.hideICD10LookupModal());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    if (!_isEmpty(children)) {
      setChildren(EMPTY_ARRAY);
    }
    if (_isEmpty(value)) {
      setDiagnoses(EMPTY_ARRAY);
      setSuggestions(EMPTY_ARRAY);
    } else {
      handleSearchCode(value);
    }
  };

  const handleBack = () => {
    const newChildren = [...children];
    newChildren.shift();
    setChildren(newChildren);
  };

  const handleSearchCode = _debounce(async (value: string) => {
    try {
      setIsLoading(true);
      const searchResults = await searchDiagnoses(value);
      setDiagnoses(searchResults?.data?.diagnoses);
      setSuggestions(searchResults?.data?.suggestions);
      setIsLoading(false);
    } catch (error) {
      logger.error({ message: "error fetching codes", payload: error });
    }
  }, DEBOUNCE_DELAY);

  const modalHeight = breakpoint === ScreenSize.XXS ? "100vh" : 600;

  const onModalScroll = useCallback((value: boolean) => setHasBorder(value), []);

  const textSize = isXXSScreen ? "md" : "xl";

  return (
    <Modal
      hasMask={true}
      height={modalHeight}
      isFullscreen={isXXSScreen}
      isMaskTransparent={false}
      onClose={handleClose}
      position="mc"
      width={modalWidth[breakpoint]}
    >
      {isSubLevel && (
        <StyledBackButton>
          <NavigationIcon color={ICON_COLORS.lightGray} icon="back" onClick={handleBack} />
        </StyledBackButton>
      )}
      <ModalHeader height={56} title={t("modals.iCD10LookupModal.title")} />
      <ModalContent hasPadding={false} height={544} onModalScroll={onModalScroll}>
        <StyledHeaderContainer hasBottomBorder={hasBorder}>
          <StyledSearchIcon>
            <Icon color={ICON_COLORS.darkGray} icon={icon} size="xs" />
          </StyledSearchIcon>
          <StyledSearchInput
            onChange={handleChange}
            placeholder={t("modals.iCD10LookupModal.placeholder")}
            value={searchQuery}
          />
          <StyledPoweredByText size="xs">{t("modals.iCD10LookupModal.poweredBy")}</StyledPoweredByText>
          {isSubLevel && (
            <StyledSubLevelText>
              <Text size={textSize}>
                {getDiagnosisText(children[0]?.diagnosis)}
                <StyledCodeLabel>{formatCode(diagnosisReader.icdCode(children[0]?.diagnosis))}</StyledCodeLabel>
              </Text>
            </StyledSubLevelText>
          )}
        </StyledHeaderContainer>
        {emptyResults && (
          <StyledEmptySection>
            <Text>
              {t("modals.iCD10LookupModal.emptyResultsText1")}
              <strong> {searchQuery} </strong>
              {t("modals.iCD10LookupModal.emptyResultsText2")}
            </Text>
          </StyledEmptySection>
        )}
        {!_isEmpty(suggestions) && !isSubLevel && (
          <ICD10List
            data={suggestions}
            key="suggestion"
            onItemClick={onItemClick}
            searchQuery={searchQuery}
            title={t("modals.iCD10LookupModal.suggestionsHeader")}
          />
        )}
        {!_isEmpty(diagnoses) && !isSubLevel && (
          <ICD10List
            data={diagnoses}
            key="diagnoses"
            onItemClick={onItemClick}
            searchQuery={searchQuery}
            title={t("modals.iCD10LookupModal.diagnosesHeader")}
          />
        )}

        {isSubLevel && (
          <ICD10List
            data={children[0].children}
            isSubLevel={true}
            key="sub-level"
            onItemClick={onItemClick}
            searchQuery={searchQuery}
            title={t("modals.iCD10LookupModal.diagnosesHeader")}
          />
        )}
      </ModalContent>
    </Modal>
  );
};

export { ICD10LookupModal };

export default ICD10LookupModal;

import {
  FlexLeftColumn,
  FlexRightColumn,
  getMultipleEncounterWidth,
  Header,
  Modal,
  ScreenSize,
  Text,
  useBreakpoint
} from "@suki-web/suki-ui";
import { FunctionComponent } from "react";
import { format, isToday } from "date-fns";
import { useTranslation } from "react-i18next";

import {
  StyledButton,
  StyledEncounter,
  StyledMultipleEncountersContainer,
  StyledText
} from "./multipleEncounters.styled";
import { DATE_FORMAT } from "../../../../../constants";

type MultipleEncountersProps = {
  closeModal: VoidFunction;
  saveUnfinishedNote: VoidFunction;
  sendToEMR: (encounter: MockDataItem) => void;
  sendToEMRChart: VoidFunction;
};

type MockDataItem = {
  date: Date;
  doctor: string;
  id: string;
  visitType: string;
};

const mockData: MockDataItem[] = [
  {
    date: new Date("Jul 01 2021 11:27:19"),
    doctor: "Dr. Mary Adams",
    id: "first",
    visitType: "Admission"
  },
  {
    date: new Date("Jul 12 2022 14:07:39"),
    doctor: "Dr. John Barry",
    id: "second",
    visitType: "[Visit type]"
  }
];

const MultipleEncounters: FunctionComponent<MultipleEncountersProps> = ({
  closeModal,
  saveUnfinishedNote,
  sendToEMR,
  sendToEMRChart
}) => {
  const { t } = useTranslation();

  const breakpoint = useBreakpoint();

  const renderEncounter = (encounter: MockDataItem) => {
    const { date, doctor, id, visitType } = encounter;

    return (
      <StyledEncounter key={id} onClick={() => sendToEMR(encounter)}>
        <FlexLeftColumn>
          <Text isBold={true} size="md">
            {visitType}
          </Text>
          <Text size="sm">{doctor}</Text>
        </FlexLeftColumn>
        <FlexRightColumn>
          {isToday(date) && (
            <Text isBold={true} size="sm">
              {t("date.today")}
            </Text>
          )}
          {!isToday(date) && (
            <>
              <Text isBold={true} size="sm">
                {format(date, DATE_FORMAT.DDMMYYYY)}
              </Text>
              <Text size="sm">{format(date, DATE_FORMAT.hhmmA)}</Text>
            </>
          )}
        </FlexRightColumn>
      </StyledEncounter>
    );
  };

  const headerSize = breakpoint === ScreenSize.XXS ? "h6" : "h5";

  return (
    <Modal
      hasCloseButton={true}
      height="auto"
      onClose={closeModal}
      position="mc"
      testId="multiple-encounters-modal"
      width={getMultipleEncounterWidth(breakpoint)}
    >
      <StyledMultipleEncountersContainer>
        <Header level={headerSize}>{t("modals.signNoteModal.multipleEncounters.title")}</Header>
        {mockData.map(renderEncounter)}
        <StyledText>
          <Text>{t("modals.signNoteModal.multipleEncounters.text")}</Text>
        </StyledText>
        <StyledButton onClick={sendToEMRChart}>{t("modals.signNoteModal.multipleEncounters.submitToEMR")}</StyledButton>
        <StyledButton onClick={saveUnfinishedNote}>
          {t("modals.signNoteModal.multipleEncounters.saveToUnfinishedNotes")}
        </StyledButton>
      </StyledMultipleEncountersContainer>
    </Modal>
  );
};

export default MultipleEncounters;

export { MultipleEncounters };

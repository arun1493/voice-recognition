import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";
import { Icon } from "@suki-web/suki-ui";
import _isUndefined from "lodash/isUndefined";
import { useTranslation } from "react-i18next";
import { FunctionComponent, memo, useState } from "react";
import { EditorTypes, Personas } from "@suki-web/suki-business";
import { QuillOnChangePropsType, SukiEditor } from "@suki-web/suki-editor";

import {
  Platter,
  ProblemBasedLabel,
  SectionBlock,
  SectionItem,
  SectionOptions,
  StyledCheckIcon,
  StyledDeleteSectionButton,
  StyledItem,
  StyledSection
} from "./section.styled";
import { NoteSection } from "../../../../types";
import { isOrgEmrIntegrated } from "../../helpers";
import { ANY_SECTION } from "../../../../constants";
import sectionReader from "../../../../readers/section";

interface SectionProps {
  allSectionOptions: NoteSection[];
  isAddNewScript?: boolean;
  isDraggable?: boolean;
  isNoteType?: boolean;
  isReadOnly: boolean;
  onDeleteSection?: (e: React.MouseEvent<HTMLElement>, sectionId: string) => void;
  onSelectSection: (noteTypeSectionIdx: number, section: NoteSection, sectionValue: string) => void;
  onUniCodeCharacters?: () => void;
  openSectionSelection: (e: Event, blockId: number) => void;
  pbcSectionFlag?: boolean;
  sectionContent: string;
  sectionId: string;
  sectionIndex: number;
  sectionName: string;
  sectionOptionsOpen: null | number;
  sectionOptionsRef: any;
  sections: NoteSection[];
  updateSections: (sections: NoteSection[]) => void;
}

const Section: FunctionComponent<SectionProps> = memo(
  ({
    allSectionOptions,
    isAddNewScript = false,
    isDraggable = false,
    isNoteType = true,
    isReadOnly,
    onDeleteSection,
    onSelectSection,
    onUniCodeCharacters,
    openSectionSelection,
    pbcSectionFlag,
    sectionContent,
    sectionId,
    sectionIndex,
    sectionName,
    sectionOptionsOpen,
    sectionOptionsRef,
    sections,
    updateSections
  }) => {
    const { t } = useTranslation();
    const isNewSection = isNoteType ? sectionId === "new-section" : _isEmpty(sectionId) && isAddNewScript;
    if (isNewSection && isNoteType) {
      sectionName = t("modals.noteTypeDetails.noteTypeSection.selectSection");
    }
    if (isNewSection && !isNoteType) {
      sectionName = t("modals.scriptDetails.selectSection");
    }

    const sectionPlaceholder = isNoteType
      ? t("modals.noteTypeDetails.editor.placeholder")
      : t("modals.scriptDetails.editor.placeholder");
    const [showDeleteSection, setShowDeleteSection] = useState<string | boolean>(false);

    const handleMouseOver = (sectionId: string) => {
      setShowDeleteSection(sectionId);
    };

    const handleMouseLeave = () => {
      setShowDeleteSection(false);
    };

    const handleOnChange = (slateConvertedContent: string, sectionIndex: number) => {
      const newSections = [...sections];
      newSections[sectionIndex].content = slateConvertedContent;
      updateSections(newSections);
    };

    const handleOnDelete = (e: React.MouseEvent<HTMLElement>) =>
      !_isUndefined(onDeleteSection) && onDeleteSection(e, sectionId);

    const renderSectionOption = (section: NoteSection, idx: number) => {
      const sectionOptionId = sectionReader.sectionId(section);
      const sectionOptionName = sectionReader.sectionName(section);
      const pbcSectionOptionFlag = sectionReader.pbcSectionFlag(section);

      let sectionAlreadyInNoteType: boolean;
      if (isNoteType) {
        sectionAlreadyInNoteType = sections.some((section: { id: string }) => section.id === sectionOptionId);
      } else {
        sectionAlreadyInNoteType = sections.some(
          (section: { sectionId?: string }) => section?.sectionId === sectionOptionId
        );
      }

      const handleClick = () => {
        const sectionValue = isNoteType ? sectionId : sectionContent;
        !sectionAlreadyInNoteType && onSelectSection(sectionIndex, section, sectionValue);
      };

      return (
        <SectionItem isNoteType={isNoteType} key={idx} onClick={handleClick}>
          <StyledItem>
            {sectionOptionName}
            {sectionAlreadyInNoteType && (
              <StyledCheckIcon>
                <Icon height={20} icon="check" size="sm" width={20} />
              </StyledCheckIcon>
            )}
          </StyledItem>
          {isNoteType && pbcSectionOptionFlag && <span>{t("modals.noteTypeDetails.noteTypeSection.pbLabel")}</span>}
        </SectionItem>
      );
    };

    return (
      <SectionBlock
        isDraggable={isDraggable}
        isNoteType={isNoteType}
        key={sectionIndex}
        onMouseLeave={() => !isReadOnly && handleMouseLeave()}
        onMouseOver={() => !isReadOnly && handleMouseOver(sectionId)}
      >
        <Platter
          className="platter"
          isNewSection={isNewSection}
          isNoteType={isNoteType}
          onClick={(e: any) => !isReadOnly && openSectionSelection(e, sectionIndex)}
        >
          {!isNoteType && <p className="label">{t("modals.scriptDetails.insertInSectionLabel")}</p>}
          <p className="section-name">
            {sectionName} {!isNoteType && <Icon height={12} icon="rightTriangle" size="md" width={12} />}
          </p>
          {isNoteType && showDeleteSection === sectionId && (
            <StyledDeleteSectionButton onClick={handleOnDelete}>
              <Icon icon="close" size="xs" />
            </StyledDeleteSectionButton>
          )}
        </Platter>
        {isNoteType && pbcSectionFlag && (
          <ProblemBasedLabel>{t("modals.noteTypeDetails.noteTypeSection.pbLabel")}</ProblemBasedLabel>
        )}
        {sectionOptionsOpen === sectionIndex && (
          <SectionOptions isNoteType={isNoteType} ref={sectionOptionsRef}>
            {_map(allSectionOptions, renderSectionOption)}
          </SectionOptions>
        )}

        <StyledSection isNoteType={isNoteType} isReadOnly={isReadOnly}>
          <SukiEditor
            content={sectionContent}
            editorType={EditorTypes.NOTETYPE}
            enableChips={isOrgEmrIntegrated()}
            id={sectionId}
            onChange={({ content }: QuillOnChangePropsType) => handleOnChange(content, sectionIndex)}
            onUniCodeCharacters={onUniCodeCharacters}
            persona={Personas.PHYSICIAN}
            placeholder={sectionPlaceholder}
            readOnly={isReadOnly}
          />
        </StyledSection>
      </SectionBlock>
    );
  }
);

export { Section };

export default Section;

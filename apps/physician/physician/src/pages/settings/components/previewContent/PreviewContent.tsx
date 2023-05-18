import _map from "lodash/map";
import _noop from "lodash/noop";
import _isEmpty from "lodash/isEmpty";
import { useTranslation } from "react-i18next";
import { Dialog, Text } from "@suki-web/suki-ui";
import { SukiEditor } from "@suki-web/suki-editor";
import { FunctionComponent, useRef, useState } from "react";
import { EditorTypes, Personas } from "@suki-web/suki-business";

import { NoteSection } from "../../../../types";
import { sectionReader } from "../../../../readers";
import { ANY_SECTION, SETTINGS_MODES } from "../../../../constants";
import { SectionBlock, StyledSection } from "../section/section.styled";
import { AddProblemButton } from "../../../note/components/addProblemButton";
import { SectionLabel, StyledButton, StyledCenterContainer } from "./previewContent.styled";
import { StyledCenter, StyledContentContainer, StyledFooter, StyledNameInputPreview } from "../../settings.styled";

type PreviewContentProps = {
  allSectionOptions: NoteSection[];
  isActionDisabled?: boolean;
  isEmbedded?: boolean;
  name: string;
  onDelete?: () => void;
  onEdit: (isEditMode: boolean) => void;
  onInsert?: () => void;
  sections: NoteSection[];
  type: string;
};

const PreviewContent: FunctionComponent<PreviewContentProps> = ({
  allSectionOptions,
  isActionDisabled = false,
  isEmbedded = false,
  name,
  onDelete = _noop,
  onEdit,
  onInsert = _noop,
  sections,
  type
}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const unsupportedContentRef = useRef(false);

  const renderSections = (section: NoteSection) => {
    const sectionContent = sectionReader.sectionContent(section);
    const sectionId = sectionReader.sectionId(section);
    let sectionName = sectionReader.sectionName(section);
    const pbcSectionFlag = sectionReader.pbcSectionFlag(section);

    // This is specifically for unsupported data in db/old scripts
    let errorUnsupportedContent;
    try {
      JSON.parse(sectionContent);
      unsupportedContentRef.current = false;
    } catch (error) {
      unsupportedContentRef.current = true;
      errorUnsupportedContent = JSON.stringify({
        ops: [{ insert: t("components.quillEditor.unicodeFormatting.error") }, { insert: "\n" }]
      });
    }

    if (!sectionName && !sectionId) {
      const sectionId = section?.sectionId || ANY_SECTION.id;
      const foundSection = allSectionOptions?.find((section) => section.id === sectionId);
      sectionName = foundSection?.name || t("modals.scriptDetails.anySection");
    }

    return (
      <SectionBlock key={sectionId}>
        <SectionLabel>{sectionName}</SectionLabel>
        <StyledSection isReadOnly={true}>
          <SukiEditor
            content={sectionContent}
            editorType={EditorTypes.NOTETYPE}
            enableChips={false}
            errorUnsupportedContent={errorUnsupportedContent}
            id={`preview-section-${sectionId}`}
            onChange={_noop}
            persona={Personas.PHYSICIAN}
            readOnly={true}
          />
          {pbcSectionFlag && <AddProblemButton isDisabled={true} onClick={_noop} />}
        </StyledSection>
      </SectionBlock>
    );
  };

  const handleOpenDeleteModal = () => setIsModalOpen(true);

  const handleCancel = () => setIsModalOpen(false);

  const handleDelete = () => {
    onDelete();
    handleCancel();
  };

  const buttonProps = {
    start: { onClick: handleCancel, text: t("modals.deleteModal.button.cancel") },
    end: { onClick: handleDelete, text: t("modals.deleteModal.button.delete") }
  };

  const dialogTitle =
    type === SETTINGS_MODES.SCRIPTS
      ? t("modals.deleteModal.deleteScriptTitle")
      : t("modals.deleteModal.deleteNoteTypeTitle");

  return (
    <>
      <StyledContentContainer isEmbedded={isEmbedded}>
        <StyledCenter>
          <StyledNameInputPreview>{name}</StyledNameInputPreview>
        </StyledCenter>
        {!_isEmpty(sections) && _map(sections, renderSections)}
      </StyledContentContainer>
      <StyledFooter>
        <StyledCenterContainer>
          <StyledButton disabled={isActionDisabled} onClick={handleOpenDeleteModal}>
            {t("pages.settings.preview.delete")}
          </StyledButton>
          {/* Remove until it won't be implemented */}
          {/* !isEmbedded && <StyledButton disabled={true}>{t("pages.settings.preview.copy")}</StyledButton> */}
          <StyledButton disabled={isActionDisabled || unsupportedContentRef.current} onClick={() => onEdit(true)}>
            {t("pages.settings.preview.edit")}
          </StyledButton>
          {isEmbedded && <StyledButton onClick={onInsert}>{t("pages.settings.preview.insert")}</StyledButton>}
        </StyledCenterContainer>
      </StyledFooter>
      <Dialog buttonProps={buttonProps} isOpen={isModalOpen} key="delete-script-modal" onClose={handleCancel}>
        <Text>{dialogTitle}</Text>
      </Dialog>
    </>
  );
};

export { PreviewContent };

export default PreviewContent;

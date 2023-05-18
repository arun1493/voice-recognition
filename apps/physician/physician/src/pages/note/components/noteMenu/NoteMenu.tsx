import _map from "lodash/map";
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { DropDownMenu, IconType } from "@suki-web/suki-ui";

import { MenuItem } from "./types";
import { getMenuItems } from "./helpers";
import { TOAST_TYPES } from "../../../../constants";
import { toastsActions } from "../../../../redux/toast";
import { modalsActions } from "../../../../redux/modals";
import { StyledNoteMenuContainer } from "./noteMenu.styled";
import { isNoteCompleted, printNote } from "../../../../helpers";
import { selectCurrentComposition } from "../../../../redux/note";
import { NoteMenuListItem } from "../../../../components/molecules";
import { compositionReader, metadataReader } from "../../../../readers";

interface NoteMenuProps {
  isReadOnlyMode: boolean;
  onClose: () => void;
}

type OptionsItem = {
  icon: IconType;
  isDisabled: boolean;
  label: string;
  onClick?: (e: { preventDefault: () => void }) => void;
  path?: string;
};

const NoteMenu: FunctionComponent<NoteMenuProps> = ({ isReadOnlyMode, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { noteId } = useParams<{ noteId: string }>();
  const compositionData = useSelector(selectCurrentComposition);
  const compositionId = compositionReader.compositionId(compositionData);
  const metadata = compositionReader.metadata(compositionData);
  const noteStatus = metadataReader.status(metadata);
  const isPartialDictationComposition = metadataReader.partialDictationComposition(metadata);

  const noteParams = isNoteCompleted(noteStatus) ? { noteId } : { compositionId };

  const handlePrintMenuItemClick = () => {
    printNote(noteParams);
    onClose();
  };

  const handleDeleteMenuItemClick = () => {
    onClose();

    if (isPartialDictationComposition) {
      dispatch(
        toastsActions.add({
          message: t("modals.deleteModal.deletePartialDictationCompositionError"),
          type: TOAST_TYPES.ERROR
        })
      );
      return;
    }

    if (!isReadOnlyMode) {
      dispatch(modalsActions.showDeleteNoteModal());
    }
  };

  const menuItems = getMenuItems({
    isDeleteDisabled: isReadOnlyMode,
    onPrint: handlePrintMenuItemClick,
    onDelete: handleDeleteMenuItemClick
  });

  const renderMenuItem = ({ disabled, icon, label, onClick }: MenuItem, id: number) => {
    const key = `note-menu-item-${id}`;
    return (
      <NoteMenuListItem data-cy={key} disabled={disabled} icon={icon} key={key} onClick={onClick} testId={key}>
        {label}
      </NoteMenuListItem>
    );
  };

  return (
    <DropDownMenu>
      <StyledNoteMenuContainer data-cy="note-menu">{_map(menuItems, renderMenuItem)}</StyledNoteMenuContainer>
    </DropDownMenu>
  );
};

export { NoteMenu };

export default NoteMenu;

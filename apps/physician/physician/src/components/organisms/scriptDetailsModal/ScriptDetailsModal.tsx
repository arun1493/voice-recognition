import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalContent, useBreakpoint } from "@suki-web/suki-ui";

import { ScriptDetails } from "../scriptDetails";
import { modalsActions } from "../../../redux/modals";
import { getHeight, getMaxHeight, getWidth } from "./helpers";
import { selectIsEditMode, settingsActions } from "../../../redux/settings";

interface ScriptDetailsModalProps {
  scriptId: string;
}

const ScriptDetailsModal: FunctionComponent<ScriptDetailsModalProps> = ({ scriptId }) => {
  const dispatch = useDispatch();
  const breakPoint = useBreakpoint();
  const isEditMode = useSelector(selectIsEditMode);

  const handleClose = () => {
    if (isEditMode) {
      dispatch(settingsActions.setEditMode(false));
    } else {
      dispatch(modalsActions.hideScriptDetailsModal());
    }
  };

  return (
    <Modal
      height={getHeight(breakPoint)}
      maxHeight={getMaxHeight(breakPoint)}
      onClose={handleClose}
      position="bc"
      skipClosing={isEditMode}
      width={getWidth(breakPoint)}
    >
      <ModalContent hasPadding={false} maxHeight="100vh">
        <ScriptDetails isEmbedded={true} scriptId={scriptId} />
      </ModalContent>
    </Modal>
  );
};

export { ScriptDetailsModal };

export default ScriptDetailsModal;

import {
  Icon,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScreenSize,
  Text,
  useBreakpointIncludes
} from "@suki-web/suki-ui";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, useEffect } from "react";

import { Script } from "../../../types";
import { getAllScripts } from "../../../api";
import { scriptReader } from "../../../readers";
import { noteActions } from "../../../redux/note";
import { modalsActions } from "../../../redux/modals";
import { NEW_SCRIPT_ID, QUERY_NAMES } from "../../../constants";
import { StyledCenterContent, StyledListContainer, StyledListItem } from "./scriptsList.styled";

const ScriptsList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { XXS, XS, MD } = ScreenSize;
  const isSmallScreen = useBreakpointIncludes(XXS, XS);
  const isScreenLarge = !useBreakpointIncludes(XXS, XS, MD);
  const modalWidth = isSmallScreen ? 344 : 448;
  const maxModalHeight = isSmallScreen ? 444 : 572;
  const maxModalContentHeight = isSmallScreen ? 280 : 408;

  const onAddScript = () => {
    dispatch(modalsActions.showScriptDetailsModal(NEW_SCRIPT_ID));
  };

  const { data: scripts, isLoading, isRefetching } = useQuery([QUERY_NAMES.SCRIPTS], getAllScripts);

  const handleClose = () => {
    dispatch(modalsActions.hideScriptsListModal());
  };

  useEffect(() => {
    dispatch(noteActions.setIsIgnoredOnBlur(true));
  }, []);

  const onScriptItemClick = (id: string) => {
    dispatch(modalsActions.showScriptDetailsModal(id));
  };

  const renderScript = (script: Script) => {
    const scriptId = scriptReader.id(script);

    return (
      <StyledListItem key={scriptId} onClick={() => onScriptItemClick(scriptId)}>
        <Text cursor="pointer" size="md">
          {scriptReader.scriptName(script)}
        </Text>
      </StyledListItem>
    );
  };

  const isLoadingList = isLoading || isRefetching;

  const headerHeight = isScreenLarge ? 84 : 76;

  return (
    <Modal
      headerHeight={headerHeight}
      maxHeight={maxModalHeight}
      onClose={handleClose}
      position="mc"
      width={modalWidth}
    >
      <ModalHeader
        height={headerHeight}
        subtitle={t("modals.scriptsList.subtitle")}
        title={t("modals.scriptsList.title")}
      />
      <ModalContent height={"fit-content"} maxHeight={maxModalContentHeight}>
        {isLoadingList ? (
          <StyledCenterContent>
            <Icon icon="loader" size="lg" />
          </StyledCenterContent>
        ) : (
          <StyledListContainer>{scripts?.map(renderScript)}</StyledListContainer>
        )}
      </ModalContent>
      <ModalFooter
        cursor="pointer"
        hasDivider={true}
        height={56}
        onClick={onAddScript}
        title={t("modals.scriptsList.footer")}
      />
    </Modal>
  );
};

export { ScriptsList };

export default ScriptsList;

import {
  Card,
  CardHeader,
  Dialog,
  getTooltipContent,
  Icon,
  IconButton,
  Page,
  SukiButton,
  SukiListItem,
  Text
} from "@suki-web/suki-ui";
import store from "store2";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Paths } from "@suki-web/suki-business";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FunctionComponent, useEffect, useRef, useState } from "react";

import { Script } from "../../../../types";
import { queryClient } from "../../../../app";
import { scriptReader } from "../../../../readers";
import { toastsActions } from "../../../../redux/toast";
import { deleteScript, getAllScripts } from "../../../../api";
import { StickyHeader } from "../../../../components/molecules";
import { getRoute, isOrganizationScript, isUserScript } from "../../../../helpers";
import { LOCAL_STORE, Pages, QUERY_NAMES, TOAST_TYPES } from "../../../../constants";
import { StyledCenterContent, StyledEmptyContent, StyledEmptyText, StyledScriptsContainer } from "./scripts.styled";

const Scripts: FunctionComponent = () => {
  const { t } = useTranslation();
  const { data: scripts, isLoading, isRefetching } = useQuery([QUERY_NAMES.SCRIPTS], getAllScripts);
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState("");
  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();

  const userScripts = scripts?.filter(isUserScript);
  const organizationScripts = scripts?.filter(isOrganizationScript);

  const isAmwellUser = store.get(LOCAL_STORE.IS_AMWELL_USER);
  const isBackButtonVisible = !isAmwellUser;

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [hasScrollBar, setHasScrollBar] = useState(false);

  const deleteScriptMutation = useMutation(deleteScript, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_NAMES.SCRIPTS]);
      dispatch(
        toastsActions.add({
          message: t("modals.scriptDetails.scriptDeletingSuccess"),
          type: TOAST_TYPES.CONFIRMATION
        })
      );
    },
    onError: () => {
      dispatch(
        toastsActions.add({ message: t("modals.scriptDetails.scriptDeletingSFailed"), type: TOAST_TYPES.ERROR })
      );
    }
  });

  const onClose = () => setOpen(false);

  const onDelete = () => {
    deleteScriptMutation.mutate(selectedId);
    onClose();
  };

  const markedUpBtnProps = {
    end: { onClick: onDelete, text: t("modals.deleteModal.button.delete") },
    hasCloseBtn: false,
    start: { onClick: onClose, text: t("modals.deleteModal.button.cancel") }
  };

  const onDeleteScript = (event: React.MouseEvent<Element, MouseEvent>, id: string) => {
    event.stopPropagation();
    setSelectedId(id);
    setOpen(true);
  };

  const onScriptItemClick = (scriptId: string) => {
    const scriptsRoute = getRoute(Pages.Scripts, { scriptId });
    scriptsRoute && navigate(scriptsRoute);
  };

  const ScriptListItem = ({ script, index }: { script: Script; index: number }) => {
    const scriptId = scriptReader.id(script);
    const userId = scriptReader.userId(script);
    const scriptName = scriptReader.scriptName(script);

    const [showRightIcon, setShowRightIcon] = useState(false);

    const handleMouseEnter = () => {
      setShowRightIcon(true);
    };

    const handleMouseLeave = () => {
      setShowRightIcon(false);
    };

    const RightIcon = () => {
      return showRightIcon ? (
        <IconButton
          icon="close"
          onClick={(event: React.MouseEvent<Element, MouseEvent>) => onDeleteScript(event, scriptId)}
        />
      ) : null;
    };

    if (!userId) {
      return (
        <SukiListItem
          hasBottomBorder={true}
          key={scriptId}
          onClick={() => onScriptItemClick(scriptId)}
          testId={`list-panel-script-item-${index}`}
          title={scriptName}
          variant="simple"
          wrapText={true}
        />
      );
    } else {
      return (
        <SukiListItem
          hasBottomBorder={true}
          key={scriptId}
          onClick={() => onScriptItemClick(scriptId)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          rightIcon={<RightIcon />}
          testId={`list-panel-script-item-${index}`}
          title={scriptName}
          variant="simple"
          wrapText={true}
        />
      );
    }
  };

  const renderUserScripts = () => {
    if (_isEmpty(userScripts)) return null;

    return (
      <>
        {userScripts.map((userScript: Script, index: number) => {
          const scriptId = scriptReader.id(userScript);
          return <ScriptListItem index={index} key={scriptId} script={userScript} />;
        })}
      </>
    );
  };

  const renderOrganizationScripts = () => {
    if (_isEmpty(organizationScripts)) return null;

    return (
      <>
        <StickyHeader icon="lock" title={t("pages.settings.types.organization")} />
        {organizationScripts.map((organizationScript: Script, index: number) => {
          const scriptId = scriptReader.id(organizationScript);
          return <ScriptListItem index={index} key={scriptId} script={organizationScript} />;
        })}
      </>
    );
  };

  const onAddScript = () => {
    const addScriptRoute = getRoute(Pages.AddScript);
    addScriptRoute && navigate(addScriptRoute);
  };

  const isEmptyResults = scripts !== undefined && !scripts.length;

  const isLoadingScripts = isRefetching || isLoading || deleteScriptMutation.isLoading;

  useEffect(() => {
    const containerHeight = _get(containerRef, "current.clientHeight", 0);
    const listHeight = _get(listRef, "current.clientHeight", 0);
    setHasScrollBar(containerHeight < listHeight);
  }, [containerRef, isLoadingScripts, listRef]);

  const onBack = () => navigate(Paths.Settings);

  const BackButton = () =>
    isBackButtonVisible ? (
      <IconButton icon="arrowLeft" onClick={onBack} testId="header-back-button" tooltip={getTooltipContent("back")} />
    ) : null;

  const AddButton = () => (
    <SukiButton data-cy="add-patients-button" onClick={onAddScript} size="md" variant="text">
      {t("pages.settings.noteType.button.title")}
    </SukiButton>
  );

  return (
    <Page>
      <Card size="sm">
        <CardHeader
          actionPrimary={<AddButton />}
          actionSecondary={<BackButton />}
          hasBorder={true}
          title={t("pages.settings.scripts.title")}
        />
        {isEmptyResults && (
          <StyledEmptyContent>
            <StyledEmptyText>{t("pages.settings.scripts.emptyScriptsResults.text1")}</StyledEmptyText>
            <br />
            <StyledEmptyText>{t("pages.settings.scripts.emptyScriptsResults.text2")}</StyledEmptyText>
          </StyledEmptyContent>
        )}
        {!isLoadingScripts && (
          <StyledScriptsContainer hasScrollBar={hasScrollBar} ref={containerRef}>
            <div ref={listRef}>
              {renderUserScripts()}
              {renderOrganizationScripts()}
            </div>
          </StyledScriptsContainer>
        )}
        {isLoadingScripts && (
          <StyledCenterContent>
            <Icon icon="loader" size="lg" />
          </StyledCenterContent>
        )}
        {!isLoadingScripts && (
          <Dialog buttonProps={markedUpBtnProps} isOpen={isOpen} key="delete-script-modal" onClose={onClose}>
            <Text>{t("modals.deleteModal.deleteScriptTitle")}</Text>
          </Dialog>
        )}
      </Card>
    </Page>
  );
};

export { Script, Scripts };

export default Scripts;

import {
  Card,
  CardContent,
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
import _map from "lodash/map";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Paths } from "@suki-web/suki-business";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FunctionComponent, useEffect, useRef, useState } from "react";

import {
  StyledCenterContent,
  StyledEmptyContent,
  StyledNoteTypesContainer,
  StyledSeparator,
  StyledStickyHeader
} from "./noteTypes.styled";
import { Note } from "../../../../types";
import { queryClient } from "../../../../app";
import { noteTypeReader } from "../../../../readers";
import { toastsActions } from "../../../../redux/toast";
import { tooltipActions } from "../../../../redux/tooltip";
import { StyledEmptyText } from "../scripts/scripts.styled";
import { deleteNoteType, fetchAllNoteTypes } from "../../../../api";
import { Pages, QUERY_NAMES, TOAST_TYPES } from "../../../../constants";
import { getRoute, isOrganizationNoteType, isUserNoteType } from "../../../../helpers";

const NoteTypes: FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: noteTypes, isLoading, isRefetching } = useQuery([QUERY_NAMES.NOTE_TYPES], fetchAllNoteTypes);
  const [selectedId, setSelectedId] = useState("");
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  const userNoteTypes = noteTypes?.filter(isUserNoteType);
  const organizationNoteTypes = noteTypes?.filter(isOrganizationNoteType);

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [hasScrollBar, setHasScrollBar] = useState(false);

  const mutation = useMutation(deleteNoteType, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_NAMES.NOTE_TYPES]);
      dispatch(
        toastsActions.add({
          message: t("modals.noteTypeDetails.deleteNoteType.mutationResponse.title"),
          type: TOAST_TYPES.CONFIRMATION
        })
      );
    }
  });

  useEffect(() => {
    dispatch(tooltipActions.setIsWithDelay(true));
  }, []);

  const onClose = () => setOpen(false);

  const onDelete = () => {
    mutation.mutate(selectedId);
    onClose();
  };

  const markedUpBtnProps = {
    end: { onClick: onDelete, text: t("modals.deleteModal.button.delete") },
    hasCloseBtn: false,
    start: { onClick: onClose, text: t("modals.deleteModal.button.cancel") }
  };

  const onDeleteNoteType = (event: React.MouseEvent<HTMLElement>, id: string) => {
    event.stopPropagation();
    setSelectedId(id);
    setOpen(true);
  };

  const NoteTypeListItem = ({ noteType, index }: { noteType: Note; index: number }) => {
    const id = noteTypeReader.id(noteType);
    const name = noteTypeReader.name(noteType);
    const userId = noteTypeReader.userId(noteType);
    const [showRightIcon, setShowRightIcon] = useState(false);

    const handleMouseEnter = () => {
      setShowRightIcon(true);
    };

    const handleMouseLeave = () => {
      setShowRightIcon(false);
    };

    const RightIcon = () => {
      return showRightIcon ? <IconButton icon="close" onClick={(event) => onDeleteNoteType(event, id)} /> : null;
    };

    if (!userId) {
      return (
        <SukiListItem
          hasBottomBorder={true}
          key={id}
          onClick={() => onNoteTypesItemClick(id)}
          testId={`list-panel-note-type-item-${index}`}
          title={name}
          variant="simple"
          wrapText={true}
        />
      );
    } else {
      return (
        <SukiListItem
          hasBottomBorder={true}
          key={id}
          onClick={() => onNoteTypesItemClick(id)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          rightIcon={<RightIcon />}
          testId={`list-panel-note-type-item-${index}`}
          title={name}
          variant="simple"
          wrapText={true}
        />
      );
    }
  };

  const renderUserNoteTypes = () => {
    if (_isEmpty(userNoteTypes)) return null;

    return (
      <>
        <StyledStickyHeader key="personal" title={t("pages.settings.types.personal")} />
        {userNoteTypes.map((userNoteType: Note, index: number) => {
          const id = noteTypeReader.id(userNoteType);
          return <NoteTypeListItem index={index} key={id} noteType={userNoteType} />;
        })}
      </>
    );
  };

  const renderOrganizationNoteTypes = () => {
    if (_isEmpty(organizationNoteTypes)) return null;
    return (
      <>
        <StyledStickyHeader icon="lock" key="organization" title={t("pages.settings.types.organization")} />
        {organizationNoteTypes.map((organizationNoteType: Note, index: number) => {
          const id = noteTypeReader.id(organizationNoteType);
          return <NoteTypeListItem index={index} key={id} noteType={organizationNoteType} />;
        })}
      </>
    );
  };

  const onNoteTypesItemClick = (noteTypeId: string) => {
    const noteTypesRoute = getRoute(Pages.NoteTypes, { noteTypeId });
    noteTypesRoute && navigate(noteTypesRoute);
  };

  const onAddNoteType = () => {
    const addNoteTypeRoute = getRoute(Pages.AddNoteType);
    addNoteTypeRoute && navigate(addNoteTypeRoute);
  };

  const isEmptyResults = noteTypes !== undefined && !noteTypes.length;

  const onMouseLeave = () => dispatch(tooltipActions.setIsWithDelay(true));

  const isLoadingData = isRefetching || isLoading || mutation.isLoading;

  const onBack = () => navigate(Paths.Settings);

  useEffect(() => {
    const containerHeight = _get(containerRef, "current.clientHeight", 0);
    const listHeight = _get(listRef, "current.clientHeight", 0);
    setHasScrollBar(containerHeight < listHeight);
  }, [containerRef, isLoadingData, listRef]);

  const AddButton = () => (
    <SukiButton data-cy="add-patients-button" onClick={onAddNoteType} size="md" variant="text">
      {t("pages.settings.noteType.button.title")}
    </SukiButton>
  );

  const BackButton = () => (
    <IconButton icon="arrowLeft" onClick={onBack} testId="header-back-button" tooltip={getTooltipContent("back")} />
  );

  return (
    <Page>
      <Card size="sm">
        <CardHeader
          actionPrimary={<AddButton />}
          actionSecondary={<BackButton />}
          hasBorder={true}
          title={t("pages.settings.noteType.title")}
        />
        <CardContent>
          {isEmptyResults && (
            <StyledEmptyContent>
              <StyledEmptyText>{t("pages.settings.noteType.emptyNoteTypesResults.text1")}</StyledEmptyText>
              <br />
              <StyledEmptyText>{t("pages.settings.noteType.emptyNoteTypesResults.text2")}</StyledEmptyText>
            </StyledEmptyContent>
          )}
          {isLoadingData && (
            <StyledCenterContent>
              <Icon icon="loader" size="lg" />
            </StyledCenterContent>
          )}
          {!isLoadingData && (
            <StyledNoteTypesContainer hasScrollBar={hasScrollBar} onMouseLeave={onMouseLeave} ref={containerRef}>
              <div ref={listRef}>
                {renderUserNoteTypes()}
                <StyledSeparator />
                {renderOrganizationNoteTypes()}
              </div>
            </StyledNoteTypesContainer>
          )}
        </CardContent>
      </Card>
      {!isLoadingData && (
        <Dialog buttonProps={markedUpBtnProps} isOpen={isOpen} key="delete-note-types-modal" onClose={onClose}>
          <Text>{t("modals.deleteModal.deleteNoteTypeTitle")}</Text>
        </Dialog>
      )}
    </Page>
  );
};

export { NoteTypes };

export default NoteTypes;

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import React, { FunctionComponent, useState } from "react";
import { getTooltipContent, Icon, IconSize, IconType, NoteStatus, PatientModes, Tooltip } from "@suki-web/suki-ui";

import { PAGES } from "../../../constants";
import { selectIsWithDelay, tooltipActions } from "../../../redux/tooltip";
import { StyledContainer, StyledDeleteContainer, StyledEmptyCell } from "./statusCell.styled";

interface StatusCellProps {
  hasDeleteButton?: boolean;
  isChart?: boolean;
  isPartialDictation?: boolean;
  isPartialDictationReadOnly?: boolean;
  onDelete?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  status?: NoteStatus;
  type?: string;
}

const StatusCell: FunctionComponent<StatusCellProps> = ({
  hasDeleteButton,
  isChart = false,
  isPartialDictation = false,
  isPartialDictationReadOnly = false,
  onDelete,
  status,
  type = "default"
}) => {
  let size: IconSize = "2xs";
  const [isTooltip, setIsTooltip] = useState<boolean>(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isWithDelay = useSelector(selectIsWithDelay);

  let iconTopPosition = 28;

  const onMouseEnter = () => setIsTooltip(true);

  const onMouseLeave = () => {
    dispatch(tooltipActions.setIsWithDelay(false));
    setIsTooltip(false);
  };

  if (hasDeleteButton && onDelete) {
    const onItemDelete = (e?: React.MouseEvent<HTMLElement>) => {
      e && e.stopPropagation();
      onDelete();
    };

    const icon = isTooltip ? "selectedClose" : "close";

    return (
      <StyledDeleteContainer onClick={onItemDelete} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Icon data-cy="status-cell" icon={icon} size="xs" />
        {isTooltip && <Tooltip content={t("components.tooltip.delete")} isWithDelay={isWithDelay} topPosition={28} />}
      </StyledDeleteContainer>
    );
  }

  if (type === PAGES.SETTINGS) {
    return (
      <StyledContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Icon data-cy="status-cell" icon="listArrow" size="3xs" />
        {isTooltip && <Tooltip content={t("components.tooltip.more")} isWithDelay={isWithDelay} sidePosition="right" />}
      </StyledContainer>
    );
  }

  if (type === PAGES.UNFINISHED_NOTES) {
    let icon: IconType | null = null;
    switch (status) {
      case NoteStatus.USER_IS_DONE:
        icon = "check";
        size = "2xs";
        break;

      case NoteStatus.SUBMITTED_TO_EMR:
        icon = "dot";
        break;

      case NoteStatus.INCOMPLETE:
        icon = "listUnfinishedNote";
        size = "xs";
        break;

      case NoteStatus.NEED_DOCTOR_SIGN_OFF:
        icon = "listSignNote";
        size = "xs";
        break;
    }

    if (icon) {
      return (
        <StyledContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Icon data-cy="status-cell" icon={icon} size={size} />
          {isTooltip && (
            <Tooltip
              content={getTooltipContent(icon)}
              isWithDelay={isWithDelay}
              sidePosition="right"
              topPosition={28}
            />
          )}
        </StyledContainer>
      );
    }
  }

  let icon: IconType | null = null;
  size = "xs";

  switch (status) {
    case NoteStatus.USER_IS_DONE:
      icon = "clock";
      break;

    case NoteStatus.INCOMPLETE:
      icon = "exclamation";
      break;

    case NoteStatus.SUBMITTED_TO_EMR:
      icon = "check";
      size = "2xs";
      break;

    case NoteStatus.NEED_DOCTOR_SIGN_OFF:
      icon = "listSignNote";
      break;

    case NoteStatus.IMPORTED_FROM_EMR:
      icon = "emr";
      size = "sm";
      iconTopPosition = 36;
      break;
  }

  if (isChart) {
    icon = "chart";
    size = "sm";
    iconTopPosition = 36;
  }

  if (isPartialDictation) {
    icon = isPartialDictationReadOnly ? "emr" : "exclamationEMR";
    size = "sm";
    iconTopPosition = 36;
  }

  let content;

  if (type === PatientModes.SCHEDULE || type === PatientModes.PATIENTS_LIST) {
    switch (status) {
      case NoteStatus.INCOMPLETE:
        icon = "dot";
        content = t("components.tooltip.unfinishedNote");
        break;
    }
  }

  if (type === PatientModes.SCHEDULE && status === NoteStatus.IMPORTED_FROM_EMR) {
    icon = "check";
    size = "2xs";
  }

  if (icon) {
    return (
      <StyledContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Icon data-cy="status-cell" icon={icon} size={size} />
        {isTooltip && (
          <Tooltip
            content={content ? content : getTooltipContent(icon)}
            isWithDelay={isWithDelay}
            sidePosition="right"
            topPosition={iconTopPosition}
          />
        )}
      </StyledContainer>
    );
  }

  return <StyledEmptyCell data-cy="status-cell" />;
};

export { StatusCell, StatusCellProps };

export default StatusCell;

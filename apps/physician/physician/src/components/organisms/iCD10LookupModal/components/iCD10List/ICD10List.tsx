import _noop from "lodash/noop";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTooltipContent, Icon, ICON_COLORS, ScreenSize, Tooltip, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  StyledCodeLabel,
  StyledHeader,
  StyledIcon,
  StyledList,
  StyledListItem,
  StyledMoreResultsText,
  StyledSectionContent
} from "./iCD10List.styled";
import { LookupItem } from "../../../../../types";
import { formatCode, formatText } from "../../helpers";
import { diagnosisReader } from "../../../../../readers";
import { getDiagnosisText } from "../../../../../helpers";
import { selectIsWithDelay, tooltipActions } from "../../../../../redux/tooltip";

/* This number is set to 25 as backend will send 26 if there are many results, this will be changed in future */
const MAX_RESULTS_TO_BE_DISPLAYED = 25;

interface CodeListProps {
  data: LookupItem[] | any;
  isSubLevel?: boolean;
  onItemClick?: (item: LookupItem, hasSubItems: boolean) => void;
  searchQuery: string;
  title: string;
}

interface ItemProps {
  item: LookupItem;
  onItemClick: (item: LookupItem, hasSubItems: boolean) => void;
  searchQuery: string;
}

const ICD10ListItem: FunctionComponent<ItemProps> = ({ item, onItemClick, searchQuery }) => {
  const { diagnosis, children } = item;
  const hasSubItems = !!children?.length;
  const dispatch = useDispatch();
  const icon = hasSubItems ? "more" : "dot";
  const [isTooltip, setIsTooltip] = useState<boolean>(false);
  const isWithDelay = useSelector(selectIsWithDelay);

  const icdCode = diagnosisReader.icdCode(diagnosis);

  const onMouseEnter = () => {
    setIsTooltip(true);
  };

  const onMouseLeave = () => {
    setIsTooltip(false);
    dispatch(tooltipActions.setIsWithDelay(false));
  };

  const onClick = () => onItemClick(item, hasSubItems);

  return (
    <StyledListItem key={icdCode} onClick={onClick}>
      <div>
        {formatText(getDiagnosisText(diagnosis), searchQuery)}
        <StyledCodeLabel>{formatCode(icdCode)}</StyledCodeLabel>
      </div>
      <StyledIcon hasPadding={hasSubItems} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {hasSubItems && <Icon color={ICON_COLORS.lightGray} height={16} icon={icon} width={8} />}
        {!hasSubItems && <Icon color={ICON_COLORS.green} icon={icon} size="xs" />}
        {isTooltip && <Tooltip content={getTooltipContent(icon)} isWithDelay={isWithDelay} sidePosition="right" />}
      </StyledIcon>
    </StyledListItem>
  );
};

const ICD10List: FunctionComponent<CodeListProps> = ({ data, isSubLevel, onItemClick = _noop, searchQuery, title }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isXXSScreen = useBreakpointIncludes(ScreenSize.XXS);

  const onMouseLeave = () => dispatch(tooltipActions.setIsWithDelay(true));

  const hasMoreResults = data.length > MAX_RESULTS_TO_BE_DISPLAYED;
  const dataToDisplay = data.filter((item: LookupItem, index: number) => index < MAX_RESULTS_TO_BE_DISPLAYED);

  const getKey = (item: LookupItem): string => {
    return diagnosisReader.icdCode(item.diagnosis) + "_" + diagnosisReader.icdDescription(item.diagnosis);
  };

  return (
    <StyledSectionContent>
      {!isSubLevel && <StyledHeader level={isXXSScreen ? "h6" : "h5"}>{title}</StyledHeader>}
      {hasMoreResults && (
        <StyledMoreResultsText size={isXXSScreen ? "sm" : "md"}>
          {t("modals.iCD10LookupModal.moreResults")}
        </StyledMoreResultsText>
      )}
      <StyledList onMouseLeave={onMouseLeave}>
        {dataToDisplay.map((item: LookupItem) => (
          <ICD10ListItem item={item} key={getKey(item)} onItemClick={onItemClick} searchQuery={searchQuery} />
        ))}
      </StyledList>
    </StyledSectionContent>
  );
};

export { ICD10List };

export default ICD10List;

import _isEmpty from "lodash/isEmpty";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { ClientEmitEventTypes } from "@suki-web/suki-business";
import { FunctionComponent, useEffect, useRef, useState } from "react";

import { useSocket } from "../../../../socket";
import { agentActions } from "../../../../redux/agent";
import { SukiAgentState } from "../../../../constants";
import { getTextAreaRowsAndColsCount } from "../../helpers";
import { SectionNameTextarea } from "../problemSection/problemSection.styled";

interface ProblemSectionNameProps {
  isActive: boolean;
  isAgentActive: boolean;
  isCapturingDictation: boolean;
  onBlur: any;
  onFocus: any;
  readOnly: boolean;
  sectionId: string;
  sectionName: string;
}
const ProblemSectionName: FunctionComponent<ProblemSectionNameProps> = ({
  isActive,
  isAgentActive,
  isCapturingDictation,
  onBlur,
  onFocus,
  readOnly,
  sectionId,
  sectionName
}) => {
  const dispatch = useDispatch();
  const { transmitEvent } = useSocket();
  const ref = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const { t } = useTranslation();

  const [name, setName] = useState(sectionName);

  useEffect(() => {
    setTimeout(() => {
      if (isActive && document.getElementById(`problem-section-${sectionId}`) === ref.current) {
        ref?.current?.focus();
      }
    }, 0);
  }, [isActive]);

  useEffect(() => {
    setName(sectionName);
  }, [sectionName]);

  useEffect(() => {
    if (sectionName !== "" && isCapturingDictation && name === "") {
      setName(sectionName);
    }
  }, [isActive, name, sectionName]);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      ref?.current?.blur();
    }
  };

  const { rowsCount, colsCount } = getTextAreaRowsAndColsCount(name, ref.current);

  const handleChange = (e: any) => {
    setName(e.target.value);
    if (isAgentActive) {
      dispatch(agentActions.setActiveStatus(false));
      dispatch(agentActions.setAgentState(SukiAgentState.MUTED));
      transmitEvent({ type: ClientEmitEventTypes.SPEECH_END });
    }
  };

  return (
    <SectionNameTextarea
      autoComplete="off"
      autoFocus={isActive}
      className="problem-section"
      cols={colsCount}
      id={`problem-section-${sectionId}`}
      key={`problem-section-${sectionId}`}
      maxLength={200}
      name={sectionId}
      onBlur={(e) => onBlur(e, name)}
      onChange={(e) => handleChange(e)}
      onFocus={() => onFocus(name)}
      onKeyPress={handleKeyPress}
      placeholder={t("pages.note.problemNamePlaceholder")}
      readOnly={readOnly}
      ref={ref}
      rows={rowsCount}
      value={name}
    />
  );
};

export { ProblemSectionName };

export default ProblemSectionName;

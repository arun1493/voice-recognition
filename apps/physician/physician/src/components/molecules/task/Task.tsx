import { FunctionComponent } from "react";
import { Icon, Text } from "@suki-web/suki-ui";

import { OobeTask } from "../../../types";
import { TASK_STATUSES } from "../../../constants";
import { StyledCheckmarkContainer, StyledChildrenContainer, StyledItem, StyledTask } from "./task.styled";

const Task: FunctionComponent<OobeTask> = ({ children, isSmall = true, status, title }) => {
  const iconName = status === TASK_STATUSES.COMPLETED ? "checkmarkOn" : "checkmarkOff";

  return (
    <StyledTask>
      <StyledItem isSmall={isSmall}>
        <StyledCheckmarkContainer>
          <Icon icon={iconName} size="xs" />
        </StyledCheckmarkContainer>
        {title}
      </StyledItem>
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
    </StyledTask>
  );
};

export default Task;

export { Task };

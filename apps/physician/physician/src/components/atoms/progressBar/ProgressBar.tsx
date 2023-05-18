import { FunctionComponent } from "react";

import { StyledBarContainer, StyledCompletedItem, StyledPendingItem } from "./progressBar.styled";

interface ProgressBarProps {
  tasksCompleted: number;
  tasksToBeCompleted: number;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({ tasksCompleted, tasksToBeCompleted, ...props }) => {
  const tasksCompletionStatuses = [...Array(tasksToBeCompleted)].map((_, index) => index < tasksCompleted);

  return (
    <StyledBarContainer {...props}>
      {tasksCompletionStatuses.map((isTaskComplete, index) =>
        isTaskComplete ? <StyledCompletedItem key={index} /> : <StyledPendingItem key={index} />
      )}
    </StyledBarContainer>
  );
};

export { ProgressBar, ProgressBarProps };

export default ProgressBar;

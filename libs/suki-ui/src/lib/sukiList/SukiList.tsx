import { FunctionComponent } from "react";

import { StyledSukiList } from "./sukiList.styled";

interface SukiListProps {
  onClick?: VoidFunction;
  testId?: string;
}

const SukiList: FunctionComponent<SukiListProps> = ({ children }) => {
  return <StyledSukiList>{children}</StyledSukiList>;
};

export { SukiList, SukiListProps };
export default SukiList;

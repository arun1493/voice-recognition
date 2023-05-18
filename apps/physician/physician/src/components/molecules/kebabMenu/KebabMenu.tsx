import { Icon, Text } from "@suki-web/suki-ui";
import { FunctionComponent, useState } from "react";

import { StyledKebabContainer, StyledKebabItem, StyledKebabMenu } from "./kebabMenu.styled";

interface KebabMenuProps {
  menuItems: Array<MenuItem>;
}

type MenuItem = {
  onClick: () => void;
  title: string;
};

const KebabMenu: FunctionComponent<KebabMenuProps> = ({ menuItems, ...props }) => {
  const [isVisible, setVisibility] = useState<boolean>(false);

  const onClick = () => setVisibility(!isVisible);

  return (
    <StyledKebabContainer {...props}>
      <Icon data-testid="moreOutlineButton" icon="moreOutline" onClick={onClick} size="sm" />
      {isVisible && (
        <StyledKebabMenu>
          {menuItems.map(({ onClick, title }, i) => (
            <StyledKebabItem data-cy={`kebab-item-${i}`} key={title} onClick={onClick}>
              <Text size="lg">{title}</Text>
            </StyledKebabItem>
          ))}
        </StyledKebabMenu>
      )}
    </StyledKebabContainer>
  );
};

export default KebabMenu;

export { KebabMenu, KebabMenuProps };

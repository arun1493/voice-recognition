import { useState } from "react";
import styled from "styled-components";
import { Meta, Story } from "@storybook/react";

import { DropDownMenu, DropDownMenuProps } from "./DropDownMenu";

export default {
  component: DropDownMenu,
  title: "DropDownMenu",
  parameters: {
    docs: {
      description: {
        component:
          "The drop down menu component represents a part of the application used to represent list items in a drop down menu.  The user clicks on the text to perform an action."
      }
    }
  }
} as Meta;

const StyledDropDownMenuAndTextContainer = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledDropDownMenuContainer = styled.div`
   {
    padding: 20px;
  }
`;

const Template: Story<DropDownMenuProps> = (args) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => setIsTextVisible(!isTextVisible);

  return (
    <StyledDropDownMenuAndTextContainer>
      <StyledDropDownMenuContainer>
        <DropDownMenu {...args} onClick={handleClick} />
      </StyledDropDownMenuContainer>
      <div data-cy="drop-down-text-container">{isTextVisible && "You have clicked the drop down menu list item!"}</div>
    </StyledDropDownMenuAndTextContainer>
  );
};

const Primary = Template.bind({});
Primary.args = { children: "Primary" };

export { Primary };

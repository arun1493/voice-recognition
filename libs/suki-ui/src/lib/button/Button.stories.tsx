import { useState } from "react";
import styled from "styled-components";
import { Meta, Story } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Button",
  parameters: {
    docs: {
      description: {
        component:
          "The Button component represents the part of an application that the user interacts with to directly communicate with the digital product and send the necessary commands to achieve a particular goal."
      }
    }
  }
} as Meta;

const StyledButtonAndTextContainer = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledButtonContainer = styled.div`
   {
    margin-bottom: 20px;
  }
`;

const Template: Story<ButtonProps> = (args) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => setIsTextVisible(!isTextVisible);

  return (
    <StyledButtonAndTextContainer>
      <StyledButtonContainer>
        <Button {...args} onClick={handleClick} />
      </StyledButtonContainer>
      {isTextVisible && "You have clicked the button!"}
    </StyledButtonAndTextContainer>
  );
};

const Primary = Template.bind({});
Primary.args = { children: "Primary", isPrimary: true };

const NotPrimary = Template.bind({});
NotPrimary.args = { children: "Not Primary", isPrimary: false };

export { NotPrimary, Primary };

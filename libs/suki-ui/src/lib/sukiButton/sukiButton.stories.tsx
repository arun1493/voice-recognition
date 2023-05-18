import React from "react";
import styled from "styled-components";
import { Meta, Story } from "@storybook/react";

import { SukiIcon } from "../icon/";
import { SukiButton, SukiButtonProps } from "./SukiButton";

export default {
  argTypes: {
    disabled: {
      control: { type: "boolean" }
    },
    onClick: { action: "clicked" },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" }
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" }
    }
  },
  component: SukiButton,
  title: "Suki Button",
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 240px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const Template: Story<SukiButtonProps & { children: React.ReactElement | string }> = (args) => {
  return (
    <StyledButtonAndTextContainer>
      <StyledButtonContainer>
        <SukiButton {...args} />
      </StyledButtonContainer>
    </StyledButtonAndTextContainer>
  );
};

const Large = Template.bind({});
Large.args = { children: "Large Button", size: "lg", variant: "contained" };

const Medium = Template.bind({});
Medium.args = { children: "Medium Button", size: "md", variant: "text" };

const Small = Template.bind({});
Small.args = { children: "Small Button", size: "sm", variant: "outlined" };

const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Sign note",
  size: "lg",
  startIcon: <SukiIcon icon="signature" />,
  width: "300px",
  type: "submit",
  variant: "contained"
};

export { Large, Medium, Small, WithIcon };

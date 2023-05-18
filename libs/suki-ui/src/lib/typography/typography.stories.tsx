import styled from "styled-components";
import { Meta, Story } from "@storybook/react";

import { Typography, TypographyProps } from "./Typography";

export default {
  argTypes: {
    component: {
      control: { type: "text" }
    }
  },
  component: Typography,
  title: "Suki Typography",
  parameters: {
    docs: {
      description: {
        component: "The Typography component is used to present text content consistently and semantically."
      }
    }
  }
} as Meta;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 240px;
`;

const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 350px;

  > * {
    margin-bottom: 20px;
  }
`;

const Template: Story<TypographyProps> = (args) => {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <Typography {...args}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
          rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const AllTemplate: Story<TypographyProps> = (args) => {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <Typography {...args} variant="h1">
          h1. Heading
        </Typography>
        <Typography {...args} variant="h2">
          h2. Heading
        </Typography>
        <Typography {...args} variant="h3">
          h3. Heading
        </Typography>
        <Typography {...args} variant="h4">
          h4. Heading
        </Typography>
        <Typography {...args} variant="h5">
          h5. Heading
        </Typography>
        <Typography {...args} variant="h6">
          h6. Heading
        </Typography>
        <Typography {...args} variant="subtitle1">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography {...args} variant="subtitle2">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography {...args} variant="body1">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </Typography>
        <Typography {...args} variant="body2">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </Typography>
        <Typography {...args} variant="caption">
          caption text
        </Typography>
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const All = AllTemplate.bind({});

const NoWrapExample = Template.bind({});
NoWrapExample.args = { noWrap: true, variant: "body1" };

export { All, NoWrapExample };

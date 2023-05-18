import styled from "styled-components";
import { Meta, Story } from "@storybook/react";

import { Fab, FabProps } from "./Fab";

export default {
  component: Fab,
  title: "Floating Action Button",
  parameters: {
    docs: {
      description: {
        component:
          "A floating action button appears in front of all screen content. Only use a FAB if it is the most suitable way to present a screen's primary action. Only one component is recommended per screen to represent the most common action."
      }
    }
  },
  argTypes: {
    onClick: { action: "clicked" }
  }
} as Meta;

const StyledContainer = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 240px;
  }
`;

const Template: Story<FabProps> = (args) => {
  return (
    <StyledContainer>
      <Fab {...args} />
    </StyledContainer>
  );
};

const Default = Template.bind({});
Default.args = { text: "Add note", icon: "noteAdd" };

const NoText = Template.bind({});
NoText.args = { icon: "noteAdd" };

export { Default, NoText };

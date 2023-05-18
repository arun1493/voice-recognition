import styled from "styled-components";
import { Meta, Story } from "@storybook/react";

import { iconMap, SukiIconType } from "../icon/SukiIcon";
import { IconButton, IconButtonProps } from "./IconButton";

export default {
  component: IconButton,
  title: "Icon buttons",
  parameters: {
    docs: {
      description: {
        component: `An Icon button is a specially styled button which contains exactly one icon (see [\`SukiIcon\`](${document.location.origin}/?path=/docs/suki-icons--icon) component).`
      }
    }
  },
  argTypes: {
    icon: {
      control: {
        options: Object.keys(iconMap) as SukiIconType[], // ["check", "search", "arrowLeft"],
        type: "select"
      },
      defaultValue: "check"
    },
    onClick: { action: "clicked" }
  }
} as Meta;

const StyledContainer = styled.div`
  margin: auto;
`;

const Template: Story<IconButtonProps> = (args) => {
  return (
    <StyledContainer>
      <IconButton {...args} />
    </StyledContainer>
  );
};

const Default = Template.bind({});
Default.args = { size: "md" };

const WithTooltip = Template.bind({});
WithTooltip.args = { size: "md", tooltip: "With tooltip" };

export { Default, WithTooltip };

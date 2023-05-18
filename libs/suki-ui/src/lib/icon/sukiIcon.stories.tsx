import styled from "styled-components";
import { Meta, Story } from "@storybook/react";

import { iconMap, IconProps, SukiIcon, SukiIconType } from "./SukiIcon";

export default {
  component: SukiIcon,
  parameters: {
    docs: {
      description: {
        component: "An Icon is a visual representation of a concept."
      }
    }
  },
  title: "Suki Icons"
} as Meta;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 56px);
  grid-template-rows: repeat(6, 60px);
  column-gap: 10px;
  row-gap: 10px;
  margin: 12px 20px 8px 40px;
`;
const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-around;
  label {
    font-size: 11px;
  }
`;

const Template: Story<IconProps> = (args) => {
  const icons: SukiIconType[] = Object.keys(iconMap) as SukiIconType[];

  return (
    <div style={{ overflow: "auto" }}>
      <StyledGrid>
        {icons.map((icon) => (
          <StyledIconWrapper key={icon}>
            <label>{icon}</label>
            <SukiIcon {...args} icon={icon} />
          </StyledIconWrapper>
        ))}
      </StyledGrid>
    </div>
  );
};

const Icon = Template.bind({});
Icon.args = { size: "md" };

export { Icon };

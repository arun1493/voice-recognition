import { useWindowSize } from "react-use";
import { Meta, Story } from "@storybook/react";
import styled, { useTheme } from "styled-components";

import { BreakpointKeysType } from "./theme";
import { useThemeBreakpoint } from "../hooks";

interface BreakpointsProps {
  screenSize?: BreakpointKeysType;
}

const StyledComp = styled.div`
  .breakpoints {
    border: 1px solid ${({ theme }) => theme.palette.primary.zomp};
    border-radius: 4px;
    color: ${({ theme }) => theme.palette.primary.zomp};
    font-style: oblique;
    margin-bottom: 32px;
    padding: 8px;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    width: 164px;
  }
  code {
    font-style: oblique;
    color: ${({ theme }) => theme.palette.primary.black85};
  }
  .is-true {
    color: ${({ theme }) => theme.palette.primary.green};
  }
  .is-false {
    color: ${({ theme }) => theme.palette.secondary.orange};
  }
`;

const Comp = ({ screenSize = "md" }: BreakpointsProps) => {
  const { isUp, isDown, isOnly, isNot, isBetween } = useThemeBreakpoint();

  const { width } = useWindowSize();

  const theme = useTheme();

  return (
    <StyledComp>
      <div>window width: {width}</div>
      <div className="breakpoints">
        <pre>{JSON.stringify(theme.breakpoints.values, null, 2)}</pre>
      </div>
      <div className="item">
        <code>isUp({screenSize})</code>
        <span className={isUp(screenSize) ? "is-true" : "is-false"}>{isUp(screenSize).toString()}</span>
      </div>
      <div className="item">
        <code>isDown({screenSize})</code>
        <span className={isDown(screenSize) ? "is-true" : "is-false"}>{isDown(screenSize).toString()}</span>
      </div>

      <div className="item">
        <code>isOnly({screenSize})</code>
        <span className={isOnly(screenSize) ? "is-true" : "is-false"}>{isOnly(screenSize).toString()}</span>
      </div>

      <div className="item">
        <code>isNot({screenSize})</code>
        <span className={isNot(screenSize) ? "is-true" : "is-false"}>{isNot(screenSize).toString()}</span>
      </div>

      <div className="item">
        <code>isBetween(sm, xl)</code>
        <span className={isBetween("sm", "xl") ? "is-true" : "is-false"}>{isBetween("sm", "xl").toString()}</span>
      </div>
    </StyledComp>
  );
};

export default {
  component: Comp,
  title: "Suki Breakpoints & functions",
  parameters: {
    docs: {
      description: {
        component: "Some breakpoint examples: Change screen size to see changes."
      }
    }
  },
  argTypes: {
    screenSize: {
      options: ["xs", "sm", "md", "lg", "xl", "xxl"],
      control: { type: "radio" }
    }
  }
} as Meta;

const StyledWrapper = styled.div`
  padding: 16px 48px 0 48px;
`;

const Template: Story = ({ screenSize }) => (
  <StyledWrapper>
    <Comp screenSize={screenSize} />
  </StyledWrapper>
);

const Breakpoint = Template.bind({});
Breakpoint.args = { screenSize: "sm" };

export { Breakpoint };

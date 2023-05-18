import styled from "styled-components";
import { Meta, Story } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";

import { SukiIcon } from "../icon";
import { SukiButton } from "../sukiButton";
import { TextField } from "./TextField";

export default {
  component: TextField,
  title: "TextField",
  parameters: {
    docs: {
      description: {
        component:
          "The `TextField` component represents a part of the application that the users interacts with in order to input text. "
      }
    }
  },
  argTypes: {
    defaultValue: {
      description: "The default value. Use when the component is not controlled."
    },
    isAutoFocus: {
      description: "If `true`, the input element is focused during the first mount."
    },
    isDisabled: {
      description: "If `true`, the component is disabled."
    },
    isError: {
      description: "If `true`, the label is displayed in an error state."
    },
    FormHelperTextProps: {
      description: "Props applied to the FormHelperText element."
    },
    type: {
      description: "Type of the input element. It should be a valid HTML5 input type.",
      control: {
        type: "select",
        options: ["text", "password", "email", "search"]
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
  align-items: start;
  margin-top: 40px;
`;

const Template: Story = (args) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    console.log("inputRef: %o", inputRef.current);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log("TextField.onChange; value: %o", value);
  };

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <TextField {...args} onChange={handleChange} ref={inputRef} />
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const Template2: Story = (args) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    console.log("inputRef: %o", inputRef.current);
  }, []);

  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log("TextField.onChange; value: %o", value);
    setName(value);
  };

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <TextField
          helperText={`Controlled value: '${name}'`}
          name="input-controlled"
          label="Controlled"
          onChange={handleChange}
          ref={inputRef}
          value={name}
        />
      </StyledInnerContainer>
      <StyledInnerContainer>
        <TextField
          defaultValue="default value"
          helperText={`Uncontrolled value: ... (from ref)`}
          name="input-uncontrolled"
          label="Uncontrolled"
          ref={inputRef}
        />
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const Primary = Template.bind({});
Primary.args = { name: "input-primary", placeholder: "Please type here" };

const Disabled = Template.bind({});
Disabled.args = { isDisabled: true, name: "input-disabled", placeholder: "This field is disabled" };

const WithLabel = Template.bind({});
WithLabel.args = { label: "Name", name: "input-label" };

const WithHelperText = Template.bind({});
WithHelperText.args = {
  helperText: "names are important",
  name: "input-helperText",
  placeholder: "Please type here"
};

const WithEndAdornment = Template.bind({});
WithEndAdornment.args = {
  endAdornment: <SukiIcon icon="priorityHigh" />,
  name: "input-endAdornment"
};

const WithErrors = Template.bind({});
WithErrors.args = {
  defaultValue: "baaad",
  endAdornment: <SukiIcon icon="priorityHigh" color="error" />,
  hasErrors: true,
  name: "input-errors",
  helperText: "username or password is incorrect"
};

const WithAutoFocus = Template.bind({});
WithAutoFocus.args = {
  name: "input-autoFocus",
  autoFocus: true
};

const WithAutoComplete = Template.bind({});
WithAutoComplete.args = {
  name: "input-autoComplete",
  autoComplete: "on",
  type: "email"
};
const ControlledVsUncontrolled = Template2.bind({});

export {
  Primary,
  Disabled,
  WithLabel,
  WithHelperText,
  WithEndAdornment,
  WithErrors,
  WithAutoFocus,
  WithAutoComplete,
  ControlledVsUncontrolled
};

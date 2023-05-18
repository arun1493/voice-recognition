import styled from "styled-components";
import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { FormInput } from "./FormInput";

export default {
  component: FormInput,
  title: "FormInput",
  parameters: {
    docs: {
      description: {
        component:
          "The form input component represents a part of the application that the users interacts with in order to input text.  The form input component captures each character of text as it is typed."
      }
    }
  }
} as Meta;

const StyledInputAndTextContainer = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

const StyledFormInputContainer = styled.div`
   {
    padding: 20px;
  }
`;
const StyledInputtedTextContainer = styled.div`
   {
    padding-left: 20px;
  }
`;

const Template: Story = (args) => {
  const [submittedText, setSubmittedText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmittedText(e?.target.value);
  };

  return (
    <StyledInputAndTextContainer>
      <StyledFormInputContainer>
        <FormInput {...args} onChange={handleChange} />
      </StyledFormInputContainer>
      <StyledInputtedTextContainer data-cy="form-input-text-container">
        Inputted Text: {submittedText}
      </StyledInputtedTextContainer>
    </StyledInputAndTextContainer>
  );
};

const Primary = Template.bind({});
Primary.args = { placeholder: "Please type here", type: "test" };

export { Primary };

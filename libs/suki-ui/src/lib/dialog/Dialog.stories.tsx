import { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Dialog } from "./";
import { Button } from "../button";

export default {
  component: Dialog,
  title: "Dialog",
  argTypes: {
    buttonProps: {
      description:
        "For each (optional) button (start, middle, end) you may pass any html button options plus a (required) text option and a onClick handler."
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Dialog component represents a part of an application that a user interacts with to perform a task."
      },
      source: {
        type: "code"
      }
    }
  }
} as Meta;

const Template: Story = (args) => {
  const [isOpen, setOpen] = useState(false);

  const handleClose = (val?: string) => {
    console.log(val);
    setOpen(false);
  };

  const handleCancel = () => handleClose("Cancel");
  const handleReset = () => handleClose("Reset");
  const handleOk = () => handleClose("Ok");

  // Adding onClick handlers here just for storybook
  const { start, middle, end } = args.buttonProps;
  const markedUpBtnProps = {
    ...args.buttonProps,
    start: { ...start, onClick: handleCancel },
    middle: { ...middle, onClick: handleReset },
    end: { ...end, onClick: handleOk },
    hasCloseBtn: true
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} width="168px" height="42px">
        Open
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={handleClose} buttonProps={markedUpBtnProps} />
    </>
  );
};

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";

const Primary = Template.bind({});
Primary.args = {
  children: text,
  title: "Sample title here",
  buttonProps: {
    start: { text: "Cancel" },
    middle: { text: "Reset" },
    end: { text: "Ok" }
  }
};

const TextOnly = Template.bind({});
TextOnly.args = { ...Primary.args, children: text, title: undefined };

const TitleOnly = Template.bind({});
TitleOnly.args = { ...Primary.args, children: undefined };

const RightButtonOnly = Template.bind({});
RightButtonOnly.args = {
  ...Primary.args,
  title: "Right Button Only",
  children: "An example showing that buttons will be placed in correct order",
  buttonProps: {
    end: { text: "Ok" }
  }
};

const WithDisabledButton = Template.bind({});
WithDisabledButton.args = {
  ...Primary.args,
  title: "With a disabled button",
  children: "An example showing a disabled 'Cancel' button",
  buttonProps: {
    start: { disabled: true, text: "Cancel" },
    middle: { text: "Reset" },
    end: { text: "Ok" }
  }
};

export { Primary, RightButtonOnly, TitleOnly, TextOnly, WithDisabledButton };

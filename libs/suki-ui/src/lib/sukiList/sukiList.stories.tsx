import { Meta, Story } from "@storybook/react";

import { iconMap } from "../icon";
import { SukiList } from "./SukiList";
import { SukiListItem, SukiListItemProps } from "./components";

const iconOptions = Object.keys(iconMap);

export default {
  argTypes: {
    isTitleBold: {
      control: { type: "boolean" }
    },
    leftIcon: {
      control: "select",
      options: iconOptions
    },
    onClick: { action: "clicked" },
    rightIcon: {
      control: "select",
      options: iconOptions
    },
    subtitle: {
      control: "select",
      options: [null, "41 • M • MRN 6237829", "Problem Based"]
    },
    variant: {
      control: "radio",
      options: ["simple", "color", "small", "title"]
    }
  },
  component: SukiList,
  title: "SukiList",
  parameters: {
    docs: {
      description: {
        component:
          "Used to create a list of related items, in no particular order with which the user interacts with to directly communicate with the digital product and send the necessary commands to achieve a particular goal."
      }
    }
  }
} as Meta;

const Template: Story = ({ listItems }) => {
  return (
    <SukiList>
      {listItems.map((listItem: SukiListItemProps) => (
        <SukiListItem {...listItem} />
      ))}
    </SukiList>
  );
};

const Simple = Template.bind({});
const patients: SukiListItemProps[] = [
  {
    testId: "6237829",
    title: "Eleanor Rigby",
    rightIcon: "caretRight",
    subtitle: "41 • F • MRN 6237829",
    variant: "simple"
  },
  {
    testId: "7348930",
    title: "Homer Simpson",
    rightIcon: "caretRight",
    subtitle: "35 • M • MRN 7348930",
    variant: "simple"
  }
];
Simple.args = {
  listItems: patients
};

const Color = Template.bind({});
const sections: SukiListItemProps[] = [
  { title: "Assessment and Plan", subtitle: "Problem Based", testId: "assesment", variant: "color" },
  { title: "History", subtitle: "", testId: "history", variant: "color" },
  { title: "Summary", subtitle: "", testId: "summary", variant: "color" }
];
Color.args = {
  listItems: sections
};

const Small = Template.bind({});
const menuItems: SukiListItemProps[] = [
  { isTitleBold: true, leftIcon: "noteUnfinished", title: "Unfinished Notes", testId: "notes", variant: "small" },
  { isTitleBold: true, leftIcon: "settings", title: "Settings", testId: "settings", variant: "small" },
  { isTitleBold: true, leftIcon: "help", title: "Help", testId: "help", variant: "small" }
];
Small.args = {
  listItems: menuItems
};

const titles: SukiListItemProps[] = [
  { title: "Dr. Yuri Zhivago", variant: "title" },
  { title: "Dr. Leonard McCoy", variant: "title" }
];

const Title = Template.bind({});
Title.args = {
  listItems: titles
};

export { Simple, Color, Small, Title };

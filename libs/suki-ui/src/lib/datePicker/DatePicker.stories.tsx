import { Meta, Story } from "@storybook/react";

import { DatePicker } from "./DatePicker";

export default {
  component: DatePicker,
  title: "DatePicker",
  decorators: [
    (Story) => (
      <div style={{ width: "500px", height: "500px" }}>
        <Story />
      </div>
    )
  ]
} as Meta;

const Template: Story = (args) => <DatePicker {...args} />;

const Primary = Template.bind({});
Primary.args = { hasMask: false };

const Formatted = Template.bind({});
Formatted.args = { format: "short" };

export { Formatted, Primary };

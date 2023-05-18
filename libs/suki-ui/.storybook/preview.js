import { addDecorator } from "@storybook/react";

import themeDecorator from "./themeDecorator";

const parameters = {
  layout: "centered"
};

addDecorator(themeDecorator);

export { parameters };

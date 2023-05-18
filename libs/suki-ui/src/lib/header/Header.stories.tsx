import { useState } from "react";
import styled from "styled-components";
import { Meta, Story } from "@storybook/react";

import { Header, HeaderTypes } from "./Header";

export default {
  component: Header,
  title: "Header",
  parameters: {
    docs: {
      description: {
        component:
          "The Header component represents a part of the application that places text at the top of a component.  There are six sizes that are available for use."
      }
    }
  }
} as Meta;

const Template: Story = (args) => {
  const HeaderAndTextContainer = styled.div`
     {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;

  const HeaderContainer = styled.div`
     {
      height: 50px;
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  `;

  const TextContainer = styled.div`
     {
      margin-bottom: 10px;
    }
  `;

  const [headerSize, setHeaderSize] = useState<HeaderTypes>("h1");
  const headerLabels = [
    { label: "Header Size 1", value: "h1" },
    { label: "Header Size 2", value: "h2" },
    { label: "Header Size 3", value: "h3" },
    { label: "Header Size 4", value: "h4" },
    { label: "Header Size 5", value: "h5" },
    { label: "Header Size 6", value: "h6" }
  ];
  const handleHeaderSizeChange = (level: HeaderTypes) => {
    console.log(level);
    setHeaderSize(level);
  };

  args.level = headerSize;

  return (
    <HeaderAndTextContainer>
      <HeaderContainer>
        <Header {...args} />
      </HeaderContainer>
      <TextContainer>
        <div>Please choose a header size</div>
      </TextContainer>
      <select onChange={(e) => handleHeaderSizeChange(e.target.value as HeaderTypes)} value={headerSize}>
        {headerLabels.map(({ label, value }, key) => (
          <option key={label + key} value={value}>
            {label}
          </option>
        ))}
      </select>
    </HeaderAndTextContainer>
  );
};

const Primary = Template.bind({});
Primary.args = { children: "Header" };

export { Primary };

import styled from "styled-components";
import { styledCenterContent } from "@suki-web/suki-ui";

const StyledAppearanceContainer = styled.div`
  ${styledCenterContent};
  margin-top: 80px;
`;

const StyledThemePicker = styled.fieldset`
  display: flex;
  justify-content: space-around;
`;

const StyledThemeItem = styled.label`
  display: flex;
  flex-direction: column;

  [type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  [type="radio"] + img {
    border-color: transparent;
    border-radius: 4px;
    border-style: solid;
    border-width: 4px;
    cursor: pointer;
    margin-bottom: 16px;
  }

  [type="radio"]:checked + img {
    border-color: ${({ theme }) => theme.components.themePicker.thumbnail.border.color.checked};
  }

  .theme-label {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export { StyledAppearanceContainer, StyledThemeItem, StyledThemePicker };

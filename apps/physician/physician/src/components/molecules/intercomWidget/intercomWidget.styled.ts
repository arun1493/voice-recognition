import styled from "styled-components";

const FloatingIntercomButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  height: 48px;
  width: 48px;
  box-shadow: 0 2px 4px rgba(1, 1, 1, 0.2);
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.components.fabButton.backgroundColor};

  :hover {
    background-color: ${({ theme }) => theme.components.fabButton.hoveredBackgroundColor};
    box-shadow: 0 4px 8px rgba(1, 1, 1, 0.3);
    transform: scale(1.05);
  }

  :active {
    background-color: ${({ theme }) => theme.components.fabButton.activeBackgroundColor};
    box-shadow: 0 2px 4px rgba(1, 1, 1, 0.2);
    transform: scale(1.1);
  }
`;

export { FloatingIntercomButton };

import styled from "styled-components";

import { ReactComponent as Logo } from "./logo.svg";

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  header {
    background-color: #143055;
    color: white;
    padding: 5px;
    border-radius: 3px;
  }

  h1 {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
  }
`;

export function App() {
  return (
    <StyledApp>
      <header className="flex">
        <Logo height="75" width="75" />
        <h1>Welcome to admin-admin!</h1>
      </header>
    </StyledApp>
  );
}

export default App;

import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Link from "./Link";
import { lightTheme } from "../theme";
import ExternalLink from "./ExternalLink";
import { ThemeProvider } from "styled-components";

afterEach(() => {
  cleanup();
});

describe("Link", () => {
  it("should render successfully with attributes", () => {
    const { baseElement } = render(
      <Router>
        <ThemeProvider theme={lightTheme}>
          <Link target="_blank" title="Go to Google" to="https://www.google.com/">
            Google
          </Link>
        </ThemeProvider>
      </Router>
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render successfully with complex pathname", () => {
    const { baseElement } = render(
      <Router>
        <ThemeProvider theme={lightTheme}>
          <Link
            state={{ isAdmin: true }}
            to={{
              hash: "#the-hash",
              pathname: "/users",
              search: "?sort=name"
            }}
            replace
          >
            Users
          </Link>
        </ThemeProvider>
      </Router>
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render external link with attributes", () => {
    const { getByText } = render(
      <Router>
        <ThemeProvider theme={lightTheme}>
          <ExternalLink target="_blank" title="Go to Google" to="https://www.google.com/">
            Google link
          </ExternalLink>
        </ThemeProvider>
      </Router>
    );

    const link = getByText("Google link") as HTMLAnchorElement;
    expect(link.href).toBe("https://www.google.com/");
    expect(link.title).toBe("Go to Google");
  });
});

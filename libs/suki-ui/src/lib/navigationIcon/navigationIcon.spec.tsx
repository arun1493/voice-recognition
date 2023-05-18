import { cleanup, render } from "@testing-library/react";

import { NavigationIcon } from "./NavigationIcon";

describe("NavigationIcon", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = render(<NavigationIcon icon="search" onClick={() => null} />);
    expect(baseElement).toBeTruthy();
  });
});

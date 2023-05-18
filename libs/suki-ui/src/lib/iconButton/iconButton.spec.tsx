import { cleanup, render } from "@testing-library/react";

import { IconButton } from "./";

describe("IconButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = render(<IconButton icon="search" onClick={() => null} />);
    expect(baseElement).toBeTruthy();
  });
});

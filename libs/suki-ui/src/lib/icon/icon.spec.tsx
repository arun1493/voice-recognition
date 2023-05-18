import { cleanup, render } from "@testing-library/react";

import { Icon } from "./Icon";

describe("Icon", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = render(<Icon icon="search" />);
    expect(baseElement).toBeTruthy();
  });
});

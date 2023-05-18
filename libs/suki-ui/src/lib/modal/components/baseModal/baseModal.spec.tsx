import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";

import { BaseModal } from "./BaseModal";

describe("BaseModal", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const modalRootEl = document.createElement("div");
    const { baseElement } = render(<BaseModal modalRootEl={modalRootEl} />);
    expect(baseElement).toBeTruthy();
  });
});

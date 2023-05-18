import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";

import { ModalMask } from "./ModalMask";

describe("ModalMask", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = render(<ModalMask />);
    expect(baseElement).toBeTruthy();
  });
});

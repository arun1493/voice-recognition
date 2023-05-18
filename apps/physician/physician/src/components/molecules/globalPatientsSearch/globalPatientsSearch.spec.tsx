import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, RenderResult } from "@testing-library/react";

import { Patient } from "../../../types";
import { componentSetup } from "../../../hocs";
import { configureI18n } from "../../../helpers";
import { mockPatients } from "../../../constants";
import { GlobalPatientsSearch, GlobalPatientsSearchProps } from ".";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const handleSearch = (t: string) => null;
const mockClick = jest.fn((patient: Patient) => console.log("handlePatientClick"));

const props: GlobalPatientsSearchProps = {
  hasCloseInInput: true,
  onPatientClick: mockClick,
  onSearch: handleSearch,
  patients: mockPatients,
  prefixIcon: "search",
  value: ""
};
const setup = componentSetup(GlobalPatientsSearch, props);
describe("GlobalPatientsSearch", () => {
  let component: RenderResult;

  beforeEach(() => {
    configureI18n();
    component = setup();
  });

  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(GlobalPatientsSearch, props);
  });

  it("should respond to input change", () => {
    const { baseElement } = component;
    const input = baseElement.querySelector("[data-testid=input]") as HTMLInputElement;

    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });

  it("should render results", () => {
    const { baseElement } = component;
    const input = baseElement.querySelector("[data-testid=input]") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    input.focus();
    const listItems = baseElement.querySelectorAll("[data-testid=listItem]");
    expect(listItems.length).toBe(3);
  });

  //TODO: Create an e2e test for this. It currently fails. I think click events only work when applied directly to the styled component (html element).
  // it("should handle click on search result item", async () => {
  //   const { baseElement } = component;

  //   const input = baseElement.querySelector("[data-testid=input]") as HTMLInputElement;

  //   fireEvent.change(input, { target: { value: "test" } });

  //   input.focus();
  //   const listItems = screen.getAllByTestId("listItem");
  //   expect(listItems.length).toBe(3);
  //   const listItem = listItems[0] as HTMLElement;
  //   fireEvent.click(listItem);
  //   // listItem.click();

  //   expect(mockClick).toBeCalled();
  // });
});

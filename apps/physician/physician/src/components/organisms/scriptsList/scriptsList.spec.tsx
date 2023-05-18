import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

import { ScriptsList } from "./";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <ScriptsList />);

describe("Scripts List", () => {
  let baseElement: Element;

  beforeEach(() => {
    configureI18n();
    baseElement = setup().baseElement;
    ReactDOM.createPortal = jest.fn<ReactPortal, any>((element, node) => element);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    expect(baseElement).toBeTruthy();
  });

  it("should has back icon & loader", () => {
    expect(baseElement.getElementsByTagName("svg").length).toEqual(2);
  });

  it("should have appropriate header", () => {
    expect(baseElement.getElementsByTagName("p")[0].textContent).toEqual("Scripts");
  });

  it("should have appropriate sub header", () => {
    expect(baseElement.getElementsByTagName("p")[1].textContent).toEqual('Say "Suki insert…');
  });

  it("title and subtitle should be in separate lines", () => {
    expect(baseElement.getElementsByTagName("p")[1].parentElement).toHaveStyle("flex-direction: column");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(ScriptsList);
  });
});

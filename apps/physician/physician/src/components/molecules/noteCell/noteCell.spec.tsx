import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { NoteCell } from ".";
import { componentSetup } from "../../../hocs";
import { LOCAL_STORE } from "../../../constants";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const props = {
  name: "hello world"
};

const setup = componentSetup(NoteCell, props);

describe("Note Cell", () => {
  let component: RenderResult;

  beforeEach(() => {
    jest.spyOn(window.localStorage.__proto__, "setItem");
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    component = setup();
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });

  it("should render correct text", () => {
    component = setup();
    const { baseElement } = component;
    expect(baseElement).toHaveTextContent("hello world");
  });

  it("should have no text if name is empty", () => {
    const newProps = {
      name: ""
    };
    component = setup(newProps);
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[0].innerHTML).toEqual("");
  });

  it("should render doctor", () => {
    const newProps = {
      name: "name",
      user: {
        id: "111",
        person: {
          firstName: "Nastya",
          lastName: "Sokolova"
        }
      }
    };
    localStorage.setItem(LOCAL_STORE.USER_ID, "222");
    component = setup(newProps);
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[1].innerHTML).toEqual("Nastya Sokolova");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(NoteCell, props);
  });
});

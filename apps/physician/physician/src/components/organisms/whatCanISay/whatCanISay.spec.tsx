import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { WhatCanISay } from "./WhatCanISay";
import { configureI18n } from "../../../helpers";
import { ModalSubType } from "../../../redux/modals";
import { componentSetupWithStore } from "../../../hocs";

const setup = (type: ModalSubType) => componentSetupWithStore(() => <WhatCanISay type={type} />);

describe("WhatCanISay modal", () => {
  let component: RenderResult;
  let modalEl: HTMLDivElement;

  afterEach(() => cleanup());

  describe("General", () => {
    beforeEach(() => {
      configureI18n();
      component = setup("general")();
      const { baseElement } = component;
      modalEl = baseElement.querySelector("[class=modal]") || document.createElement("div");
    });

    it("should render successfully", () => {
      expect(modalEl).toBeTruthy();
    });

    it("should have correct number of list items", () => {
      const listElements = modalEl.querySelectorAll("li");
      expect(listElements.length).toEqual(12);
    });

    it("has the correct options", () => {
      const expected = expectedOptions.general;
      const listElements = modalEl.querySelectorAll("li");
      const options = Array.from(listElements).map((el) => el.textContent);
      expect(options).toEqual(expect.arrayContaining(expected));
    });
  });

  describe("Note", () => {
    beforeEach(() => {
      configureI18n();
      component = setup("note")();
      const { baseElement } = component;
      modalEl = baseElement.querySelector("[class=modal]") || document.createElement("div");
    });

    it("should render successfully", () => {
      expect(modalEl).toBeTruthy();
    });

    it("should have correct number of list items", () => {
      const listElements = modalEl.querySelectorAll("li");
      expect(listElements.length).toEqual(15);
    });

    it("has the correct options", () => {
      const expected = expectedOptions.note;
      const listElements = modalEl.querySelectorAll("li");
      const options = Array.from(listElements).map((el) => el.textContent);
      expect(options).toEqual(expect.arrayContaining(expected));
    });
  });

  describe("Embed", () => {
    beforeEach(() => {
      configureI18n();
      component = setup("embed")();
      const { baseElement } = component;
      modalEl = baseElement.querySelector("[class=modal]") || document.createElement("div");
    });

    it("should render successfully", () => {
      expect(modalEl).toBeTruthy();
    });

    it("should have correct number of list items", () => {
      const listElements = modalEl.querySelectorAll("li");
      expect(listElements.length).toEqual(7);
    });

    it("has the correct options", () => {
      const expected = expectedOptions.embed;
      const listElements = modalEl.querySelectorAll("li");
      const options = Array.from(listElements).map((el) => el.textContent);
      expect(options).toEqual(expect.arrayContaining(expected));
    });
  });
});

const expectedOptions = {
  general: [
    "Show my schedule",
    "Show my list",
    "Create a<note type>",
    "Create a note",
    "Go to unfinished notes",
    "Log out",
    "Help",
    "Go back",
    "Go home",
    "Go to settings",
    "Show my scripts",
    "Show my note types"
  ],
  note: [
    "Go to<section name>",
    "Stop",
    "Undo",
    "Insert<script name>",
    "Change<field within a template>",
    "Copy forward<section name>",
    "Show vital signs",
    "Show medications",
    "Show allergies",
    "Show past medical history",
    "Show past surgical history",
    "I'm done",
    "Delete this note",
    "Print this note",
    "Patient name is<patient name>"
  ],
  embed: [
    "<section name>",
    "Stop",
    "Show my scripts",
    "Insert<script name>",
    "Change<field name>",
    "Undo",
    "Copy forward<section name>"
  ]
};

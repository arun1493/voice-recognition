import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult, screen } from "@suki-web/suki-business";

import { NoteTypes } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";

const setup = componentSetupWithStore(() => <NoteTypes />);

describe("Note Types", () => {
  describe("with loading state", () => {
    let component: RenderResult;

    beforeEach(() => {
      configureI18n();
      component = setup();
    });

    afterEach(() => {
      cleanup();
    });

    it("should render successfully", () => {
      const { container, getByDataCy } = component;

      expect(container).toBeTruthy();
      expect(screen).toBeDefined();

      expect(getByDataCy("which-note-type-modal")).toBeInTheDocument();
    });

    it("should have loading icon present", () => {
      const { getByDataCy } = component;
      expect(getByDataCy("loader-icon")).toBeInTheDocument();
    });

    it("should have correct header title", () => {
      const { getByText } = component;
      expect(getByText("Which note type?")).toBeInTheDocument();
    });
  });

  describe("with no available note types", () => {
    let component: RenderResult;

    const preloadedState = {
      note: {
        compositionId: "compositionId"
      },
      noteTypes: {
        isFetched: true,
        isLoading: false,
        noteTypes: []
      }
    };

    beforeEach(() => {
      configureI18n();
      component = setup({}, preloadedState);
    });

    afterEach(() => {
      cleanup();
    });

    it("should not have loading icon present", () => {
      // use `queryBy` selector, as `getBy` selectors throw error for missing element case
      const { queryByDataCy } = component;
      expect(queryByDataCy("loader-icon")).not.toBeInTheDocument();
    });

    it("should have correct header title", () => {
      const { getByText } = component;
      expect(getByText(/No Note Types/i)).toBeInTheDocument();
    });

    it("should have a description", () => {
      const { getByText } = component;
      expect(getByText(/To create a note, you’ll need to define at least one note type./i)).toBeInTheDocument();
      expect(getByText(/You can add and edit note types in Suki’s Settings./i)).toBeInTheDocument();
    });

    it("should have go to settings button", () => {
      const { getByDataCy } = component;
      const goToSettingsButton = getByDataCy("dialog-button");

      expect(goToSettingsButton).toBeInTheDocument();
      expect(goToSettingsButton).toHaveTextContent("Go to settings");
    });
  });

  describe("with available note types", () => {
    let component: RenderResult;

    const preloadedState = {
      note: {
        compositionId: "compositionId"
      },
      noteTypes: {
        isFetched: true,
        isLoading: false,
        noteTypes: [
          { id: "id1", name: "noteType1" },
          { id: "id2", name: "noteType2" }
        ]
      }
    };

    beforeEach(() => {
      configureI18n();
      component = setup({}, preloadedState);
    });

    afterEach(() => {
      cleanup();
    });

    it("should not have loading icon present", () => {
      const { queryByDataCy } = component;
      expect(queryByDataCy("loader-icon")).not.toBeInTheDocument();
    });

    it("should have correct header title", () => {
      const { getByText } = component;
      expect(getByText("Which note type?")).toBeInTheDocument();
    });

    it("should contain list element", () => {
      const { getByTestId } = component;
      expect(getByTestId("notetypes-list")).toBeInTheDocument();
    });

    it("should render available note types", () => {
      const { getByText } = component;
      expect(getByText("noteType1")).toBeInTheDocument();
      expect(getByText("noteType2")).toBeInTheDocument();
    });
  });
});

import _noop from "lodash/noop";
import { Provider } from "react-redux";
import _debounce from "lodash/debounce";
import { lightTheme } from "@suki-web/suki-ui";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { screen, waitFor } from "@testing-library/dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { configureI18n } from "../../../helpers";
import { mockPatients } from "../../../constants";
import { setupStore } from "../../../redux/store";
import { Patient, Patients } from "../../../types";
import { NotePatientsSearch } from "./NotePatientsSearch";

describe("NotePatientsSearch", () => {
  beforeEach(() => {
    configureI18n();
  });

  afterEach(() => {
    cleanup();
  });

  const queryClient = new QueryClient();
  let patients: Patients, selectedPatient: Patient;
  const handleSearchPatient = _debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
    patients = mockPatients;
  }, 0);

  // this test case describes basic interaction with search component,
  // where we type "test" in the input, then waiting for debounce and after rerender,
  // we have a list of search results, and then we can execute the "setPatient" function to get the selected patient.
  it("should respond to input change", async () => {
    const handleAddPatient = (patient: Patient) => {
      selectedPatient = patient;
    };

    const component = () => (
      <Provider store={setupStore({})}>
        <ThemeProvider theme={lightTheme}>
          <QueryClientProvider client={queryClient}>
            <NotePatientsSearch
              isPatientsListVisible={true}
              onClose={_noop}
              onPatientClick={handleAddPatient}
              onSearch={handleSearchPatient}
              patients={patients}
            />
          </QueryClientProvider>
        </ThemeProvider>
      </Provider>
    );

    const { rerender } = render(component());
    const input = screen.queryByTestId("input") as HTMLInputElement;

    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");

    await waitFor(
      () => {
        rerender(component());

        input.focus();
        const listItem = screen.getAllByTestId("listItem")[0] as HTMLElement;

        expect(selectedPatient).toBeUndefined();

        fireEvent.click(listItem);

        expect(selectedPatient).toBe(patients[0]);
      },
      { timeout: 350 }
    );
  });
});

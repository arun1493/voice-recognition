import {
  getAddPatientsButton,
  getListPanelList,
  getListPanelSchedule,
  getListTab,
  getPatientAge,
  getPatientAppointmentTime,
  getPatientGender,
  getPatientName,
  getPatientsListFromMenu,
  getScheduleTab,
  getStatusCell
} from "../support/patients.po";
import { getSukiLogo } from "../support/app.po";

describe("Patient page", () => {
  describe("Schedule Tab", () => {
    beforeEach(() => {
      cy.login("eshei+cypress@suki.ai", "Cypress123!");
      getPatientsListFromMenu().click();
    });

    it("should have a correct url", () => {
      cy.url().should("include", "/patients/schedule");
    });

    it("should verify is logo in the screen", () => {
      getSukiLogo().should("exist");
    });

    it("should have both tabs", () => {
      getScheduleTab().should("exist");
      getListTab().should("exist");
    });

    it("should not have add patients button", () => {
      getAddPatientsButton().should("not.exist");
    });

    it("should have correct data", () => {
      setTimeout(() => {
        getPatientName().should("exist");
        getPatientAge().should("exist");
        getPatientGender().should("exist");
        getStatusCell().should("exist");
        getPatientAppointmentTime().should("not.exist");
      });
    });

    it("should redirect from schedule to patient profile", () => {
      setTimeout(() => {
        getListPanelSchedule(0).click();
        cy.url().should("include", "/patients/profile");
      });
    });
  });

  describe("List Tab", () => {
    beforeEach(() => {
      cy.login("eshei+cypress@suki.ai", "Cypress123!");
      getPatientsListFromMenu().click();
      getListTab().click();
    });

    it("should have a correct url", () => {
      cy.url().should("include", "/patients/list");
    });

    it("should verify is logo in the screen", () => {
      getSukiLogo().should("exist");
    });

    it("should have both tabs", () => {
      getScheduleTab().should("exist");
      getListTab().should("exist");
    });

    it("should have add patients button", () => {
      getAddPatientsButton().should("exist");
    });

    it("should have correct data", () => {
      setTimeout(() => {
        getPatientName().should("exist");
        getPatientAge().should("exist");
        getPatientGender().should("exist");
        getStatusCell().should("exist");
        getPatientAppointmentTime().should("not.exist");
      });
    });

    it("should redirect from list to patient profile", () => {
      setTimeout(() => {
        getListPanelList(0).click();
        cy.url().should("include", "/patients/profile");
      });
    });
  });
});

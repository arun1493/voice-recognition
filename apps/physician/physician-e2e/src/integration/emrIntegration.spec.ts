import { getEmrIntegrationToolbar, getReduxState } from "../support/emrIntegration.po";

describe("emr connection", () => {
  // if user don't have connected emr
  it("should not display emr connection toolbar and modal", () => {
    cy.login("eshei+cypress@suki.ai", "Cypress123!");
    cy.visit("/home");

    getReduxState().then((state) => {
      expect(state.emr.tokens).to.be.undefined;
      expect(state.emr.emrData).to.be.a("object").and.to.be.empty;
    });
    getEmrIntegrationToolbar().should("not.exist");
  });

  // if user have connected emr
  it("should detect user emr connection", () => {
    cy.login("srinath+cernerin@suki.ai", "Cerner123#");
    cy.visit("/home");

    cy.intercept("GET", "/fhir/token/CERNER_EMR").as("getFhirTokens");
    cy.wait("@getFhirTokens");

    getReduxState().then((state) => {
      const { tokens, connectionStatus } = state.emr;
      const { fhirAccessToken, fhirIdToken, fhirRefreshToken } = tokens;

      if (connectionStatus === "CONNECTED") {
        expect(tokens).to.be.a("object").and.not.be.empty;
        expect(fhirAccessToken).to.be.a("string").and.not.be.empty;
        expect(fhirIdToken).to.be.a("string").and.not.be.empty;
        expect(fhirRefreshToken).to.be.a("string").and.not.be.empty;
        getEmrIntegrationToolbar().should("not.exist");
      } else {
        expect(connectionStatus).to.be.a("string").and.to.equal("PENDING");
        expect(tokens).to.be.a("object").and.not.be.empty;
        expect(fhirAccessToken).to.be.a("string").and.to.be.empty;
        expect(fhirIdToken).to.be.a("string").and.to.be.empty;
        expect(fhirRefreshToken).to.be.a("string").and.to.be.empty;
        getEmrIntegrationToolbar().should("exist");
      }
    });
  });
});

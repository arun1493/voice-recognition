import { getAgent } from "../support/app.po";
import { getSeeAnExample } from "../support/videoPlayer.po";

describe("videoPlayer screen", () => {
  beforeEach(() => cy.login("eshei+cypress@suki.ai", "Cypress123!"));

  it("should verify agent is not on the screen", () => {
    cy.visit("/help");
    getSeeAnExample().click();
    getAgent().should("not.be.visible");
  });
});

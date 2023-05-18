import {
  getAgent,
  getIntroStep1Arrow,
  getIntroStep1Description,
  getIntroStep1Header,
  getIntroStep2Description,
  getIntroStep2Header,
  getIntroStep2Play,
  getIntroStep2Skip,
  getIntroStep4Description,
  getIntroStep4Header,
  getIntroStep4KebabMenu,
  getIntroStep4List,
  getIntroStep4ProgressBar,
  getKebabItem,
  getSukiLogo,
  getVideoPlayer,
  getVideoPlayerCloseBtn
} from "../support/app.po";

describe("first time user", () => {
  beforeEach(() => cy.login("eshei+cypress@suki.ai", "Cypress123!"));

  it("should verify is logo in the screen", () => {
    getSukiLogo().should("exist");
  });

  it("should verify a user is able to login and redirect to home", () => {
    cy.url().should("include", "/home");
  });

  it("should check agent", () => {
    cy.checkInactiveAgent();
  });

  it("should show intro screen for first time user", () => {
    getIntroStep1Header().contains("Tap here to wake Suki");
    getIntroStep1Arrow().should("exist");
    getIntroStep1Description().contains("Suki only listens when awake.");
  });

  it("should show second screen for first time user after agent click", () => {
    getAgent().click();
    getIntroStep2Header().contains("Hello, I’m Suki.");
    getIntroStep2Description().contains(
      "To get started, here’s a brief video that shows how I can help you create a note."
    );
    getIntroStep2Skip().should("exist");
    getIntroStep2Play().should("exist");
  });

  it("should show fourth screen after skip", () => {
    getAgent().click();
    getIntroStep2Skip().click();
    getIntroStep4Header().contains("Getting Started");
    getIntroStep4KebabMenu().should("exist");
    getIntroStep4Description().contains("Try these actions or voice commands");
    getIntroStep4List().children().should("have.length", 5);
    getIntroStep4ProgressBar().should("exist");
  });

  it("should play demo and close on close btn click", () => {
    getAgent().click();
    getIntroStep2Play().click();
    getVideoPlayer().should("exist");
    getVideoPlayerCloseBtn().click();
    getVideoPlayer().should("not.exist");
  });

  it("should show final empty step after click on remove", () => {
    getAgent().click();
    getIntroStep2Skip().click();
    getIntroStep4KebabMenu().click();
    getKebabItem(0).click();
    getIntroStep4Header().should("not.exist");
  });
});

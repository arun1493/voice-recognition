import { getWindowsDownloadLink } from "./redirectLinks";

const prodLink = "https://storage.googleapis.com/windows-app.suki.ai/SukiAssistantSetup.msi";
const devLink = "https://storage.googleapis.com/windows-app.suki-dev.com/SukiAssistantSetup.msi";

describe("Helper - getWindowsDownloadLink", () => {
  it("should return correct result with localhost", () => {
    expect(getWindowsDownloadLink()).toBe(devLink);
    expect(getWindowsDownloadLink("localhost:3003")).toBe(devLink);
  });

  it("should return correct result with Dev env", () => {
    expect(getWindowsDownloadLink("app.suki-dev.com")).toBe(devLink);
  });

  it("should return correct result with Test env", () => {
    expect(getWindowsDownloadLink("app.suki-test.com")).toBe(devLink);
  });

  it("should return correct result with Stage env", () => {
    expect(getWindowsDownloadLink("app.suki-stage.com")).toBe(devLink);
  });

  it("should return correct result with Prod env", () => {
    expect(getWindowsDownloadLink("app.suki.ai")).toBe(prodLink);
  });
});

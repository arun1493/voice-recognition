import { isEmailValid } from "./isValidEmail";

describe("isEmailValid function", () => {
  it("should return true if email is valid", () => {
    const email = "email@example.com";
    expect(isEmailValid(email)).toBeTruthy();
  });

  it("should return false if email invalid", () => {
    const email1 = "emailexample.com";
    expect(isEmailValid(email1)).toBeFalsy();

    const email2 = "email@examplecom";
    expect(isEmailValid(email2)).toBeFalsy();
  });
});

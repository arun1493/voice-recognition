import { Paths } from "@suki-web/suki-business";

import { getRoute } from "./route";
import { Pages } from "../../constants";

describe("Route util", () => {
  it("should return valid note route", () => {
    expect(getRoute(Pages.Note, { noteId: "1234567890" })).toBe("/note/1234567890");
  });

  it("should return '/unfinished-notes' path if noteId is not passed for creating note route", () => {
    expect(getRoute(Pages.Note)).toEqual(Paths.UnfinishedNotes);
  });

  it("should return valid login route", () => {
    expect(getRoute(Pages.Login)).toBe("/login");
  });

  it("should return valid Root route", () => {
    expect(getRoute(Pages.Root)).toBe("/");
  });

  it("should return valid Intro route", () => {
    expect(getRoute(Pages.Intro)).toBe("/intro");
  });

  it("should return valid Schedule route", () => {
    expect(getRoute(Pages.Schedule)).toBe("/patients/schedule");
  });

  it("should return valid List route", () => {
    expect(getRoute(Pages.List)).toBe("/patients/list");
  });

  it("should return valid Help route", () => {
    expect(getRoute(Pages.Help)).toBe("/help");
  });

  it("should return valid ForgotPassword route", () => {
    expect(getRoute(Pages.ForgotPassword)).toBe("/forgot-password");
  });
});

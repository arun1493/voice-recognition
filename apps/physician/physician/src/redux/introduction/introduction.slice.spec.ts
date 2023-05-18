import { IntroScreens } from "../../constants";
import { initialIntroState, introActions, introReducer } from "./introduction.slice";

describe("introduction reducer", () => {
  it("should handle initial state", () => {
    expect(introReducer(undefined, { type: "" })).toEqual(initialIntroState);
  });

  it("should handle setActiveScreen Screen1", () => {
    const state = introReducer(undefined, introActions.setActiveScreen(IntroScreens.Screen1));
    expect(state).toEqual({
      ...initialIntroState,
      activeScreen: IntroScreens.Screen1
    });
  });

  it("should handle setActiveScreen Screen2", () => {
    const state = introReducer(undefined, introActions.setActiveScreen(IntroScreens.Screen2));
    expect(state).toEqual({
      ...initialIntroState,
      activeScreen: IntroScreens.Screen2
    });
  });

  it("should handle setActiveScreen Screen3", () => {
    const state = introReducer(undefined, introActions.setActiveScreen(IntroScreens.Screen3));
    expect(state).toEqual({
      ...initialIntroState,
      activeScreen: IntroScreens.Screen3
    });
  });

  it("should handle setActiveScreen Screen4", () => {
    const state = introReducer(undefined, introActions.setActiveScreen(IntroScreens.Screen4));
    expect(state).toEqual({
      ...initialIntroState,
      activeScreen: IntroScreens.Screen4
    });
  });

  it("should handle setActiveScreen null", () => {
    const state = introReducer(undefined, introActions.setActiveScreen(null));
    expect(state).toEqual({
      ...initialIntroState,
      activeScreen: null
    });
  });
});

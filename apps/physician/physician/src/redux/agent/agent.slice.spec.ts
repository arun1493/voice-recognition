import { agentActions, agentReducer, AgentState, initialAgentState } from "./agent.slice";

describe("agent reducer", () => {
  it("should handle initial state", () => {
    expect(agentReducer(undefined, { type: "" })).toEqual(initialAgentState);
  });

  it("should handle toggle isActive", () => {
    const state = agentReducer(undefined, agentActions.toggleActive());

    expect(state).toEqual({
      ...initialAgentState,
      isActive: true
    });
  });

  it("should handle bottom position", () => {
    const state = agentReducer(undefined, agentActions.setBottom());

    expect(state).toEqual({
      ...initialAgentState,
      position: "bottom"
    });
  });

  it("should handle center position", () => {
    const initialBottomState: AgentState = {
      ...initialAgentState,
      position: "bottom"
    };
    const state = agentReducer(initialBottomState, agentActions.setCentered());

    expect(state).toEqual({
      ...initialAgentState,
      position: "center"
    });
  });

  it("should handle toggle isHidden", () => {
    const state = agentReducer(undefined, agentActions.setIsHidden(true));
    expect(state).toEqual({
      ...initialAgentState,
      isHidden: true
    });

    const state2 = agentReducer(state, agentActions.setIsHidden(false));
    expect(state2).toEqual(initialAgentState);
  });
});

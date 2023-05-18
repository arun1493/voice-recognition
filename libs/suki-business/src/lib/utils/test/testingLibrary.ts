import { ReactElement } from "react";
import { Matcher, MatcherOptions, queries, render, RenderOptions, RenderResult } from "@testing-library/react";

import { findAllByDataCy, findByDataCy, getAllByDataCy, getByDataCy, queryAllByDataCy, queryByDataCy } from "./queries";

interface ExtendedRenderResult extends RenderResult {
  findAllByDataCy: (dataCyValue: Matcher) => Promise<HTMLElement[]>;
  findByDataCy: (dataCyValue: Matcher) => Promise<HTMLElement | null>;
  getAllByDataCy: (dataCyValue: Matcher, options?: MatcherOptions) => HTMLElement[];
  getByDataCy: (dataCyValue: Matcher, options?: MatcherOptions) => HTMLElement | null;
  queryAllByDataCy: (dataCyValue: Matcher, options?: MatcherOptions) => HTMLElement[];
  queryByDataCy: (dataCyValue: Matcher, options?: MatcherOptions) => HTMLElement | null;
}

const extendedRender = (component: ReactElement, options?: Omit<RenderOptions, "queries">): ExtendedRenderResult =>
  render(component, {
    queries: {
      ...queries,
      findAllByDataCy,
      findByDataCy,
      getAllByDataCy,
      getByDataCy,
      queryAllByDataCy,
      queryByDataCy
    },
    ...options
  });

export * from "@testing-library/react";

export { extendedRender as render };
export { ExtendedRenderResult as RenderResult };

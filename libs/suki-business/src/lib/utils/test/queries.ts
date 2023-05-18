import { buildQueries, Matcher, MatcherOptions, queryHelpers } from "@testing-library/react";

// Reference : https://testing-library.com/docs/queries/about/#types-of-queries

const queryAllByDataCy = (container: HTMLElement, dataCyValue: Matcher, options?: MatcherOptions): HTMLElement[] =>
  queryHelpers.queryAllByAttribute("data-cy", container, dataCyValue, options);

const getMultipleError = (container: HTMLElement, dataCyValue: Matcher) =>
  `Found multiple elements with the data-cy attribute of: ${dataCyValue}`;

const getMissingError = (container: HTMLElement, dataCyValue: Matcher) =>
  `Unable to find an element with the data-cy attribute of: ${dataCyValue}`;

const [queryByDataCy, getAllByDataCy, getByDataCy, findAllByDataCy, findByDataCy] = buildQueries(
  queryAllByDataCy,
  getMultipleError,
  getMissingError
);

export { findAllByDataCy, findByDataCy, getAllByDataCy, getByDataCy, queryAllByDataCy, queryByDataCy };

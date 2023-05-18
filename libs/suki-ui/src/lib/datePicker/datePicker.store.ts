import { createReducerContext } from "react-use";

type ViewType = "default" | "month";

type Action = {
  payload: number | ViewType;
  type: "SET_DATE" | "SET_MONTH" | "SET_YEAR" | "SET_VIEW";
};

type DatePickerState = {
  date: number;
  month: number;
  view: ViewType;
  year: number;
};

const date = new Date();

const initialState: DatePickerState = {
  date: date.setHours(0, 0, 0, 0),
  month: date.getMonth(),
  view: "default",
  year: date.getFullYear()
};

type ReducerFunction = (state: DatePickerState, action: Action) => DatePickerState;
const reducer: ReducerFunction = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      return { ...state, date: action.payload as number };
    case "SET_MONTH":
      return { ...state, month: action.payload as number };
    case "SET_YEAR":
      return { ...state, year: action.payload as number };
    case "SET_VIEW":
      return { ...state, view: action.payload as ViewType };
    default:
      throw new Error();
  }
};

const setDate: (date: number) => Action = (date) => {
  return { type: "SET_DATE", payload: date };
};

const setMonth: (month: number) => Action = (month) => {
  return { type: "SET_MONTH", payload: month };
};

const setYear: (year: number) => Action = (year) => {
  return { type: "SET_YEAR", payload: year };
};

const setView: (view: ViewType) => Action = (view) => {
  return { type: "SET_VIEW", payload: view };
};

const [useDatePickerState, DatePickerStateProvider] = createReducerContext(reducer, initialState);

export { DatePickerStateProvider, setDate, setMonth, setView, setYear, useDatePickerState };

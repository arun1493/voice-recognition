/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app";
import store from "./redux/store";
import { configureI18n } from "./helpers";
import { initializeAnalytics } from "./hocs";

configureI18n();
initializeAnalytics();

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </Provider>,
  document.getElementById("root")
);

//@ts-ignore
if (window.Cypress) {
  //@ts-ignore
  window.store = store;
}

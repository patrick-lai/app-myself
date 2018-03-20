import React from "react";
import ReactDOM from "react-dom";
import initReactFastclick from "react-fastclick";
import { Provider } from "react-redux";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import config from "./config";
import globalStyles from "./globals.scss";
import App from "./App";
import { ToastContainer } from "react-toastify";

// Scaffold
import { init, history } from "react-app-engine";
import { store } from "react-app-engine/src/store";
import { pushRight } from "react-app-engine/src/transitions";
import ErrorBoundary from "react-app-engine/src/components/ErrorBoundary";

import ReactGA from "react-ga";

if (process.env.UA_TRACKING_ID) {
  console.log("GA Tracking enabled");
  ReactGA.initialize(process.env.UA_TRACKING_ID);
  // Listen to Routing
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
}

// Authentication routes can be done like this:
// <Route
//   path="/login"
//   render={() => {
//     const isLoggedIn = _.get(store.getState(), 'session');
//     return isLoggedIn ? <Redirect to="/" /> : <Login login={login} />;
//   }}
// />

init(config).then(async () => {
  initReactFastclick();
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        <Router history={history}>
          <div style={{ height: "100vh", width: "100vw" }}>
            <ToastContainer />
            <Switch>
              <Route path="/" component={App} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </ErrorBoundary>,
    document.getElementById("app")
  );
});

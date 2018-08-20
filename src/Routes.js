import * as React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { generateRequireSignInWrapper } from "redux-token-auth";
import { createBrowserHistory } from "history";
import App from "./components/App";
import Map from "./components/Map";
import Signin from "./components/Signin";

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: "/signin",
});

const history = createBrowserHistory({});

const NotFound = () => (
  <div>
    <h3>404 Not Found</h3>
  </div>
);

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/map" component={requireSignIn(Map)} />
      <Route exact path="/signin" component={Signin} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

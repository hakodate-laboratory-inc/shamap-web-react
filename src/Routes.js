import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { generateRequireSignInWrapper } from "redux-token-auth";
import App from "./components/App";
import Map from "./components/Map";
import Signin from "./components/Signin";

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: "/signin",
});

const NotFound = () => (
  <div>
    <h3>404 Not Found</h3>
  </div>
);

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/map" component={requireSignIn(Map)} />
      <Route exact path="/signin" component={Signin} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

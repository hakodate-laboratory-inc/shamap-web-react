import * as React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { generateRequireSignInWrapper } from "redux-token-auth";
import { createBrowserHistory } from "history";
import App from "./components/App";
import Map from "./components/Map";
import Signin from "./components/Signin";
import NotFound from "./components/NotFound";

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: "/signin",
});

const history = createBrowserHistory({});

export default props => {
  const newhistory = props.history || history;
  return (
    <Router history={newhistory}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/map" component={requireSignIn(Map)} />
        <Route exact path="/signin" component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

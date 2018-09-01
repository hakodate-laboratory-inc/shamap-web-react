import * as React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { generateRequireSignInWrapper } from "redux-token-auth";
import { createBrowserHistory } from "history";
import Top from "./components/Top";
import MapIndex from "./containers/MapIndex";
import Map from "./containers/Map";
import Signin from "./components/Signin";
import NotFound from "./components/NotFound";

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: "/signin",
});

const history = createBrowserHistory({});

export default props => {
  const newHistory = props.history || history;
  return (
    <Router history={newHistory}>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/maps" component={MapIndex} />
        <Route exact path="/maps/:map_slug(\w+)" component={requireSignIn(Map)} />
        <Route exact path="/signin" component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

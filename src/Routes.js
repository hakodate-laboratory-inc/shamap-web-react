import * as React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import { generateRequireSignInWrapper } from "redux-token-auth";
import Navbar from "./Navbar";
import Top from "./components/Top";
import MapIndex from "./containers/MapIndex";
import Map from "./containers/Map";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: "/signin",
});

export default props => {
  const history = props.history || createBrowserHistory();
  return (
    <Router history={history}>
      <div>
        { props.history ? null : <Navbar /> }
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/maps" component={MapIndex} />
          <Route exact path="/maps/:map_slug(\w+)" component={requireSignIn(Map)} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

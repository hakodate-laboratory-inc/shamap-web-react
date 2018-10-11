import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { store, persistor } from "./configureStore";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from "./Navbar";
import Routes from "./Routes";
import registerServiceWorker from "./registerServiceWorker";
import { verifyCredentials } from "./config/redux-token-auth-config";

verifyCredentials(store);

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <div>
          <Navbar />
          <Routes />
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import "./index.css";
import Routes from "./Routes";
import registerServiceWorker from "./registerServiceWorker";
import { verifyCredentials } from "./config/redux-token-auth-config";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
verifyCredentials(store);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

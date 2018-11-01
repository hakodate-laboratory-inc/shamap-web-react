import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.scss";
import { store, persistor } from "./configureStore";
import Routes from "./Routes";
import registerServiceWorker from "./registerServiceWorker";
import { verifyCredentials } from "./config/redux-token-auth-config";

verifyCredentials(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

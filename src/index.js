import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { store, persistor } from "./configureStore";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { verifyCredentials } from "./config/redux-token-auth-config";

verifyCredentials(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

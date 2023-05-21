import React from "react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import {app} from "./firebase.config";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} app={app}>
    <React.StrictMode>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);

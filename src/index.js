import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ServicesContextProvider } from "./store/services-context";
import { LoginContextProvider } from "./store/LoginContext";

ReactDOM.render(
  // <React.StrictMode>
  <ServicesContextProvider>
    <LoginContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoginContextProvider>
  </ServicesContextProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

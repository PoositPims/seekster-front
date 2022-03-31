import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ServicesContextProvider } from "./store/services-context";

ReactDOM.render(
  // <React.StrictMode>
  <ServicesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ServicesContextProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

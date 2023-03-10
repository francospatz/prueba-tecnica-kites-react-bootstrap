import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
// core styles
import "./scss/styles.scss";

import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      {/* <ScrollToTop /> */}
      <Home />
    </HashRouter>
  </React.StrictMode>
);

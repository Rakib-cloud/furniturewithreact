import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";

import {BrowserRouter} from "react-router-dom/dist";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <BrowserRouter>
       <App />
   </BrowserRouter>
  </React.StrictMode>
);
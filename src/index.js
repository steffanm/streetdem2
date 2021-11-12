import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import ButtonAppBar from "./components/top_bar_navigation";

ReactDOM.render(
  <React.StrictMode>
    <ButtonAppBar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

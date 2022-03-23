import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "Styles/Global";

import App from "Pages/index";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "store";
import { GlobalContainer, GlobalStyle } from "styles";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <GlobalContainer>
      <App />
    </GlobalContainer>
  </Provider>,
  document.getElementById("root")
);

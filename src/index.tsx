import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import FetchAPiProvider from "./api/FetchAPiProvider";
import App from "./App";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <FetchAPiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FetchAPiProvider>
  </Provider>,
  document.getElementById("root")
);

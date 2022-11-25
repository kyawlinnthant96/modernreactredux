import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// redux
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>
);

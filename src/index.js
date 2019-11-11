import React from "react";
import App from "./App";
import Store from "./Store";
import ReactDOM from "react-dom";
import "./index.css";

const Index = () => {
  return (
    <Store>
      <App />
    </Store>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

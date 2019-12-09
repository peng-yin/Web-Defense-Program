import React from "react";
import ReactDOM from "react-dom";

export default function render(Component, props) {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Component {...props} />, rootElement);
}

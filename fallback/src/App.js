import React from "react";

import ErrorBoundary from "./ErrorBoundary";
import Ad from "./Ad";
import "./styles.css";

export default function App(props) {
  const { data } = props;
  const { rest } = data;

  return (
    <div>
      <strong>余额：</strong>
      <span className="highlight">{rest.amount}元</span>
      <ErrorBoundary fallback>
        <Ad />
      </ErrorBoundary>
    </div>
  );
}

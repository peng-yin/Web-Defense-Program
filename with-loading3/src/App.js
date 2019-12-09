import React from "react";

import "./styles.css";

export default function App(props) {
  const { data } = props;

  return (
    <div className="App">
      <h1>Hello {data.name}</h1>
    </div>
  );
}

import React from "react";

import "./styles.css";

export default function App(props) {
  const { data } = props;

  return (
    <ul className="App">
      {data.slice(0, 5).map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
}

import React, { useState } from "react";

import Detail from "./Detail";
import "./styles.css";

export default function App() {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="App">
      <button onClick={handleToggle}>切换</button>
      {visible && <Detail />}
    </div>
  );
}

import React, { useState } from "react";
import "./App.css";
import { Content } from "./content";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>show</button>
      {show && <Content />}
    </div>
  );
}

export default App;

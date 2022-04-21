import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, set_title] = useState<string>("");

  return (
    <div className="App">
      <input value={title} onChange={(e) => set_title(e.target.value)} />
    </div>
  );
}

export default App;

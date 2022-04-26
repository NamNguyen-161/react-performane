import { useMemo, useRef, useState } from "react";
import "./App.css";
import Content from "./content";

function App() {
  const [show, setShow] = useState(false);
  const [value, set_value] = useState<string>();
  const [list, set_list] = useState<Array<number>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * useMemo được gọi khi list thay đổi.
   */

  const total = useMemo(() => {
    const totalValue = list.reduce((result, list) => result + list, 0);
    return totalValue;
  }, [list]);

  const handleAddList = () => {
    set_list([...list, value ? +value : 0]);
    set_value("");
    inputRef.current?.focus();
  };

  return (
    <div className="App">
      <input
        ref={inputRef}
        onChange={(e) => set_value(e.target.value)}
        value={value ? value : ""}
      />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <br />
      <button onClick={handleAddList}>Add</button>
      <br />
      Total: {total}
      <br />
      <button onClick={() => setShow(!show)}>show</button>
      {show && <Content />}
    </div>
  );
}

export default App;

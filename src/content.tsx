import React, { useEffect, useState } from "react";

const menu = [{ name: "posts" }, { name: "albums" }, { name: "photos" }];

export interface ContentProps {}

export function Content(props: ContentProps) {
  const [title, setTitle] = useState("posts");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [goToTop, setGoToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${title}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setCount(count + 1);
      });
  }, [title]);

  useEffect(() => {
    const handleScroll = () => {
      const height = window.scrollY;
      if (height >= 200) {
        setGoToTop(true);
      } else {
        setGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log("mounting...");
    return () => {
      console.log("Unmounting...");
    };
  }, []);

  return (
    <div className="App">
      {/* <p>{count}</p> */}
      <div style={{ display: "flex" }}>
        {menu.map((item, index) => (
          <button
            key={index}
            onClick={() => setTitle(item.name)}
            style={{ backgroundColor: `${item.name === title ? "gray" : ""}` }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <ul>
        {list.map((item: any, index: number) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      {goToTop && (
        <button style={{ position: "fixed", bottom: "20px", right: "20px" }}>
          Go to top
        </button>
      )}
    </div>
  );
}

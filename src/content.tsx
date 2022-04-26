import { useCallback, useEffect, useRef, useState, memo } from "react";
import Memo from "./Memo";

const menu = [{ name: "posts" }, { name: "albums" }, { name: "photos" }];

const lessons = [1, 2, 3];

export interface ContentProps {}

const Content = (props: ContentProps) => {
  const [title, setTitle] = useState("posts");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(10);
  const [goToTop, setGoToTop] = useState(false);
  const [lessonId, setLessonId] = useState(1);

  const timerRef = useRef<NodeJS.Timeout>();
  const preCount = useRef<number>();

  console.log("render content");

  /**
   * useCallback create reference
   * dùng useCallback cùng với component memo
   */
  const handleIncrease = useCallback(() => {
    setCount((preCount) => preCount + 1);
  }, []);

  // useRef
  useEffect(() => {
    preCount.current = count;
  }, [count]);

  const handleStop = () => {
    clearInterval(Number(timerRef.current));
  };

  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setCount((preState) => preState - 1);
    }, 1000);
  };

  // custom event dom
  // useEffect(() => {
  //   const handleListenEvent = ({ detail }: CustomEventInit) => {
  //     console.log(detail);
  //   };
  //   window.addEventListener(`lesson-${lessonId}`, handleListenEvent);

  //   return () =>
  //     window.removeEventListener(`lesson-${lessonId}`, handleListenEvent);
  // }, [lessonId]);

  //clean up interval
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCount((preState) => preState - 1);
  //   }, 1000);
  //   return () => clearInterval(timerId);
  // }, []);

  //fetch api
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${title}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, [title]);

  // handle and clean up scroll
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <p>{count}</p>
      <Memo onIncrease={handleIncrease} />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>

      <ul style={{ listStyle: "none" }}>
        {lessons.map((lesson, index) => (
          <li
            onClick={() => setLessonId(lesson)}
            key={index}
            style={{ color: `${lessonId === lesson ? "red" : "#333"}` }}
          >
            Lesson-{lesson}
          </li>
        ))}
      </ul>
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
        <button
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
          onClick={handleToTop}
        >
          Go to top
        </button>
      )}
    </div>
  );
};

export default memo(Content);

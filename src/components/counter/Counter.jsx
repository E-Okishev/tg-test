import { useState, useEffect } from "react";
import s from './Counter.module.css';

export const Counter = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <>
      <h1 className={s.count}>{count}</h1>
      <button className={s.button} onClick={() => setCount(count + 1)}>Прибавить</button>
    </>
  );
};

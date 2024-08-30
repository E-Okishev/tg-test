import { useState } from "react";
import s from './Counter.module.css'

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={s.count}>{count}</h1>
      <button className={s.button} onClick={() => setCount(count + 1)}>Прибавить</button>
    </>
  );
};

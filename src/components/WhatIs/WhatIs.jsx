import { BlockTitle } from "../elements/BlockTitle/BlockTitle";
import { WhatIsList } from "../elements/WhatIsList/WhatIsList";
import { whatIs } from "../../data";
import s from "./WhatIs.module.css";

export const WhatIs = () => {
  return (
    <>
      <BlockTitle>Что такое Битрикс24</BlockTitle>
      <ul className={s.list}>
        {whatIs.map((detail) => (
          <WhatIsList key={detail.description} {...detail} />
        ))}
      </ul>
    </>
  );
};

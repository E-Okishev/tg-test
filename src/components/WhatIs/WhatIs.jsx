import { BlockTitle } from "../BlockTitle/BlockTitle";
import { Details } from "../Details/Details";
import { whatIs } from "../../data";
import s from "./WhatIs.module.css";

export const WhatIs = () => {
  return (
    <>
      <BlockTitle>Что такое Битрикс24</BlockTitle>
      <ul>
        {whatIs.map((detail) => (
          <Details key={detail.description} {...detail} />
        ))}
      </ul>
    </>
  );
};

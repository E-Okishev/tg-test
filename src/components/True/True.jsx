import { BlockTitle } from "../BlockTitle/BlockTitle";
import { TrueList } from "../TrueList/TrueList";
import { data } from "../../data";

export const True = () => {
  return (
    <>
      <BlockTitle>Давайте по{"\u2011"}честному</BlockTitle>
      <ul>
        {data.map((detail) => (
          <TrueList key={detail.description} {...detail} />
        ))}
      </ul>
    </>
  );
};

import { BlockTitle } from "../BlockTitle/BlockTitle";
import { Details } from "../Details/Details";
import { data } from "../../data";

export const True = () => {
    console.log(data);
    
  return (
    <section>
      <BlockTitle>Давайте по{"\u2011"}честному</BlockTitle>
      <ul>
        {data.map((detail) => (
          <Details key={detail.description} {...detail} />
        ))}
      </ul>
    </section>
  );
};

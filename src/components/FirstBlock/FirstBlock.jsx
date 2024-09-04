import { Button } from "../elements/Button/Button";
import image from "../../images/bgImage.webp";
import s from "./FirstBlock.module.css";

export const FirstBlock = () => {
  return (
    <div className={s.block}>
      <h1 className={s.text}>
        Внедрение и обслуживание{" "}
        <span className={s.span}>CRM{"\u00A0"}Битрикс24</span>
      </h1>
      <h3 className={s.text}>от Золотого партнёра 1С{"\u2011"}Битрикс</h3>
      <Button>Получить консультацию</Button>
      <img
        className={s.image}
        src={image}
        alt="Изоюбражение Битрикс24 на ноутбуке"
      />
    </div>
  );
};

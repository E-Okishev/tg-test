import { Button } from "../Button/Button";

import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.block}>
        <p className={s.text}>
          Оставьте заявку и мы свяжемся с{"\u00A0"}вами в{"\u00A0"}ближайшее
          время
        </p>
        <Button>Получить консультацию</Button>
      </div>
    </footer>
  );
};

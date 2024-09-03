import logo from "../../images/logo.svg";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={s.header}>
        <img className={s.logo} src={logo} alt="Logo" />
      </div>
    </header>
  );
};

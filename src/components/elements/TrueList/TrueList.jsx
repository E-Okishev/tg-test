import s from "./TrueList.module.css";

export function TrueList(props) {
  return (
    <li className={s.listItem}>
      <div className={s.image}>{props.img}</div>
      <p>{props.description}</p>
    </li>
  );
}

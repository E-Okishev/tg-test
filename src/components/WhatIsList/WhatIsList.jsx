import s from "./WhatIsList.module.css";

export function WhatIsList(props) {
  return (
    <li className={s.listItem}>
      <div className={s.text}>
        <h4 className={s.title}>{props.title}</h4>
        <p>{props.description}</p>
        <ul>
          {props.list.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <p>{props.subtitle}</p>
      </div>
    </li>
  );
}

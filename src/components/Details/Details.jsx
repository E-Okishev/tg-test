import s from "./Details.module.css";

export function Details(props) {
  return (
    // <li className={s.listItem}>
    //   <div className={s.image}>{props.img}</div>
    //   <p>{props.description}</p>
    // </li>

    <li className={props.img ? `${s.listItem} ${s.listItemImg}` : `${s.listItem} ${s.listElemNoImg}`}>
      {/* Рендеринг изображения, если оно есть */}
      {props.img && <div className={s.image}>{props.img}</div>}

      {/* Рендеринг заголовка, если он есть */}
      {props.title && <h4 className={s.title}>{props.title}</h4>}

      {/* Рендеринг описания, если оно есть */}
      {props.description && (
        <p className={s.description}>{props.description}</p>
      )}

      {/* Рендеринг списка, если он есть */}
      {props.list && (
        <ul className={s.list}>
          {props.list.map((item, index) => (
            <li key={index} className={s.listElem}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Рендеринг подзаголовка, если он есть */}
      {props.subtitle && <p className={s.subtitle}>{props.subtitle}</p>}
    </li>
  );
}

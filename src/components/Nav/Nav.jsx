// export const Nav = () => {
//   return (
//     <nav className={s.nav}>
//       <ul className={s.list}>
//         <li>
//           <a href='#'>О Битрикс24</a>
//         </li>
//         <li>
//           <a href='#'>Как мы работаем</a>
//         </li>
//         <li>
//           <a href='#'>Тарифы</a>
//         </li>
//         <li>
//           <a href='#'>Компетенции</a>
//         </li>
//         <li>
//           <a href='#'>Кейсы</a>
//         </li>
//         <li>
//           <a href='#'>О нас</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// src/components/Nav.js
import React, { useEffect, useRef } from "react";
import s from "./Nav.module.css";

export const Nav = ({ sections, activeSection, onSectionChange }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          onSectionChange(section.id);
          scrollMenuToActiveItem(section.id);
        }
      });
    };

    const scrollMenuToActiveItem = (id) => {
      const menuItem = document.getElementById(`menu-item-${id}`);
      if (menuItem && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = menuItem.getBoundingClientRect();

        if (itemRect.left < menuRect.left || itemRect.right > menuRect.right) {
          menuItem.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, onSectionChange]);

  return (
    <nav ref={menuRef}>
      <div className={s.nav}>
        <ul className={s.list}>
          {sections
            .filter((section) => section.showInMenu)
            .map((section) => (
              <li
                key={section.id}
                className={
                  activeSection === section.id
                    ? `${s.listItem} ${s.active}`
                    : `${s.listItem}`
                }
              >
                <a
                  id={`menu-item-${section.id}`}
                  href={`#${section.id}`}
                  className={s.link}
                >
                  {section.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

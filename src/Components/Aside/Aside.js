import { NavLink } from 'react-router-dom';

export default function Aside() {
  const navData = [
    { link: "/", text: "Главное" },
    { link: "/business", text: "Бизнес" },
    { link: "/health", text: "Здоровье" },
    { link: "/entertainment", text: "Отдых" },
    { link: "/science", text: "Наука" },
    { link: "/sports", text: "Спорт" },
    { link: "/technology", text: "Технологии" },
  ];

  return (
    <aside className="aside">
      <div className="aside__content">
        <ul className="menu" >
          {navData.map(function (elem, index) {
            return (
              <li className="menu__list" key={index}>
                <NavLink className="menu__link" to={elem.link}>{elem.text}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  );
};



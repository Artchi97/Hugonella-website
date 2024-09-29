import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

export default function NavBar({ handleNavTextActive, navTextActive }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function showMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  function handleNavBarClick(navText) {
    handleNavTextActive(navText);
    setMenuIsVisible(false);
  }

  return (
    <nav>
      <div
        className={`hamburger-icon ${menuIsVisible ? "open" : ""}`}
        onClick={showMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-list ${menuIsVisible ? "open" : ""}`}>
        {[
          { label: "Strona Główna", path: "/" },
          { label: "O nas", path: "/about-us" },
          { label: "Nasze psy", path: "/our-dogs" },
          { label: "Szczenięta", path: "/puppies" },
          { label: "Galeria", path: "/gallery" },
          { label: "Kontakt", path: "/contact" },
        ].map((item) => (
          <Link key={item.label} to={item.path}>
            <li
              className={navTextActive === item.label ? "active" : ""}
              onClick={() => handleNavBarClick(item.label)}
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

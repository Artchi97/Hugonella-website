import { useState } from "react";

import "../styles/NavBar.css";

export default function NavBar() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function showMenu() {
    setMenuIsVisible(!menuIsVisible);
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
        <li>Strona Główna</li>
        <li>O nas</li>
        <li>Nasze psy</li>
        <li>Szczenięta</li>
        <li>Galeria</li>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
}

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cynology from "../assets/cynology-logo.jpg";
import "../styles/Header.css";

export default function Header({ navTextActive, handleNavTextActive }) {
  return (
    <header>
      <div className="whole-div-content">
        <Link to="/">
          <div
            onClick={() => handleNavTextActive("Strona Główna")}
            className="header-img"
          >
            <img src={logo} alt="logo hodowla hugonella" />
          </div>
        </Link>
        <div className="header-content">
          <Link to="/">
            <div
              onClick={() => handleNavTextActive("Strona Główna")}
              className="header-title"
            >
              <h2>HugoNella FCI</h2>
              <p>Hodowla Labrador Retriever</p>
            </div>
          </Link>
        </div>
        <div className="cynology-logo">
          <a href="https://www.zkwp.pl/" target="_blank" rel="noreferrer">
            <img src={cynology} alt="cynology logo" />
          </a>
        </div>
      </div>
    </header>
  );
}

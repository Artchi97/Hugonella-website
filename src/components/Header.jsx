import logo from "../assets/logo.png";
import cynology from "../assets/cynology-logo.jpg";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-img">
        <img src={logo} alt="logo hodowla hugonella" />
      </div>
      <div className="header-content">
        <div className="header-title">
          <h2>HugoNella FCI</h2>
          <p>Hodowla Labrador Retriever</p>
        </div>
      </div>
      <div className="cynology-logo">
        <a href="https://www.zkwp.pl/" target="_blank" rel="noreferrer">
          <img src={cynology} alt="cynology logo" />
        </a>
      </div>
    </header>
  );
}

import "../styles/Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main-part">
        <div className="footer-contact-data">
          <h2 className="contact-h2">Skontaktuj się z nami:</h2>
          <ul className="contact-list">
            <li className="contact-item">
              <i className="fa-solid fa-location-dot"></i>Gaj, Wielkopolskie
            </li>
            <li className="contact-item">
              <i className="fa-solid fa-phone"></i>Tel. kom.:{" "}
              <a className="tel-nr" href="tel:+48727541233">
                +48 727 541 233
              </a>
            </li>

            <li className="contact-item">
              <i className="fa-solid fa-envelope"></i>E-mail:{" "}
              <a className="mail" href="mailto:kingakatarzynska@gmail.pl">
                kingakatarzynska@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <img className="logo-img" src={logo} alt="Logo Hugonella" />
        <div className="social-media">
          <h2 className="social-media-h2">Znajdziesz nas również na:</h2>
          <ul className="social-media-items">
            <li className="social-media-item">
              <a
                href="https://www.facebook.com/hodowlahugonella"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="social-media-item">
              <a
                href="https://www.instagram.com/hodowlahugonella/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="social-media-item">
              <a
                href="https://www.tiktok.com/@hugonella"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="all-rights-reserved">
        &copy; Copyright 2024 - all rights reserved
      </p>
    </footer>
  );
}

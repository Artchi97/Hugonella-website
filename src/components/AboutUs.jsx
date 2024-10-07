import "../styles/AboutUs.css";
import { useState, useEffect } from "react";
import AboutUsImage from "../assets/AboutUs.jpg";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`about-us-container fade-in ${
        isVisible ? "fade-in-active" : ""
      }`}
    >
      <div className="about-us-photo-div">
        <img
          className="about-us-img"
          src={AboutUsImage}
          alt="Owners with all dogs"
          loading="lazy"
        />
      </div>
      <section className="about-us-section">
        <p className="paragraph-one">
          Hodowla <span className="breeding-name">HugoNella FCI</span> zrodziła
          się z prawdziwej pasji do psów rasy labrador retriever. Nasza przygoda
          z hodowlą psów rozpoczęła się w 2015 roku, kiedy w naszym domu
          pojawiła się Nelka, która od razu skradła nasze serca. Od tamtej pory
          nasza miłość do tej rasy tylko rosła. Każdy pies jest dla nas
          wyjątkowy, dlatego dokładamy wszelkich starań, aby zapewnić im jak
          najlepsze warunki życia i rozwoju.
        </p>{" "}
        <p className="paragraph-two">
          Nasza pasja opiera się na odpowiedzialnym podejściu do hodowli, dbamy
          o zdrowie, temperament i socjalizację naszych psów. Stawiamy na
          jakość, nie ilość, dlatego każdy szczeniak wychodzi od nas dobrze
          przygotowany do nowego domu. Labradory to nie tylko piękne psy, ale
          przede wszystkim wierni towarzysze, którzy obdarzają swoich
          właścicieli bezwarunkową miłością. Jeśli marzysz o labradorze, który
          stanie się członkiem Twojej rodziny, serdecznie zapraszamy do
          kontaktu!
        </p>
      </section>
    </div>
  );
}

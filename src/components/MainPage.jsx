import "../styles/MainPage.css";
import { useState, useEffect } from "react";
import Feed from "./Feed";
import teddy from "../assets/Teddy5-medium.jpg";

export default function MainPage({ feedData }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div
        className={`photo-description-div fade-in ${
          isVisible ? "fade-in-active" : ""
        }`}
      >
        <div className="main-photo">
          <img src={teddy} alt="Teddy" loading="lazy" />
        </div>
        <div className="main-sentence">
          <p>
            Witaj na stronie hodowli labrador retriever{" "}
            <span className="breeding-name">HugoNella FCI</span> - w miejscu,
            gdzie pasja łączy się z miłością do psów!
          </p>
          <span className="main-quote">
            "Nasz dom jest pełen merdających ogonów, pocałunków, mokrych nosów i
            miłości"
          </span>
        </div>
      </div>
      <Feed feedData={feedData} />
    </>
  );
}

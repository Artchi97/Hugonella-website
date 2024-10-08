import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/DogDetails.css";
import dogsData from "../dogsData";
import BackButton from "./BackButton";

export default function DogDetails({ showsData }) {
  const [isVisible, setIsVisible] = useState(false);
  const { dogName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const dog = dogsData.find((d) => d.dogName === dogName);

  if (!dog) {
    return <h2 className="dog-not-found">Pies nie został znaleziony!</h2>;
  }

  function handleShowsClick() {
    navigate(`/shows/${dogName}`);
  }

  function handleDogGalleryClick() {
    navigate(`/dog-gallery/${dogName}`);
  }

  return (
    <div
      className={`dog-details-main-div fade-in ${
        isVisible ? "fade-in-active" : ""
      }`}
    >
      <div className="dog-details-above-img">
        <h2 className="dog-details-fullname">{dog.fullName}</h2>
        <p className="dog-details-name">"{dog.dogName}"</p>
        {dog.titles.map((title, index) => (
          <p key={index} className="dog-details-title">
            {title}
          </p>
        ))}
      </div>
      <div className="dog-details-main-photo">
        <img
          className="dog-details-image"
          src={dog.images[0]}
          alt={dog.dogName}
          loading="lazy"
        />
      </div>
      <div className="details-below-img">
        <p className="dog-birthday">
          <span className="detail-title">Ur. </span>
          {dog.birthday}
        </p>
        <p className="parents-name">
          <span className="detail-title">Rodzice: </span>
          {dog.parents}
        </p>

        <p className="test-results">
          {dog.tests.length > 0 ? (
            <>
              <span className="detail-title">Badania: </span>
              {dog.tests.map((test, index) => (
                <span key={index} className="detail-test">
                  {test},{" "}
                </span>
              ))}
            </>
          ) : (
            ""
          )}
        </p>
      </div>
      <div className="details-buttons-section">
        {dog.dogName !== "Hugo" ? (
          <a href={dog.lineage} target="_blank" rel="noreferrer">
            <button className="details-button">Sprawdź rodowód</button>
          </a>
        ) : (
          ""
        )}

        <button className="details-button" onClick={handleShowsClick}>
          {" "}
          Wystawy
        </button>
        <button className="details-button" onClick={handleDogGalleryClick}>
          Galeria
        </button>
      </div>
      <BackButton className="back-button">{"<<"} Wstecz</BackButton>
    </div>
  );
}

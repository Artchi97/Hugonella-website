import { useState, useEffect } from "react";
import "../styles/Puppies.css";
import litters from "../litters";
import Modal from "./Modal";

export default function Puppies() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeLitterPhotos, setActiveLitterPhotos] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Opóźnienie przed rozpoczęciem animacji

    return () => clearTimeout(timeoutId);
  }, []);

  function handleOpenModal(photos, index) {
    setActiveLitterPhotos(photos);
    setActiveImageIndex(index);
    setIsModalOpen(true);
    console.log(isModalOpen, activeImageIndex, activeLitterPhotos);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleShowPreviousImage() {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? activeLitterPhotos.length - 1 : prevIndex - 1
    );
  }

  function handleShowNextImage() {
    setActiveImageIndex((prevIndex) =>
      prevIndex === activeLitterPhotos.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div
      className={`dog-details-gallery-container fade-in ${
        isVisible ? "fade-in-active" : ""
      }`}
    >
      {litters.map((litter) => (
        <div className="litter-container" key={litter.litterName}>
          <h2 className="litter-h2">{litter.litterName}</h2>
          <div className="litter-main-img-container">
            <img
              src={litter.litterMainPhoto}
              alt="plakat miotu"
              className="main-img"
              loading="lazy"
            />
          </div>
          <p className="litter-date">{litter.litterDate}</p>
          <p className="parent-litter">
            <span className="parent-litter-title">Matka: </span>
            {litter.bitchName}
          </p>
          <p className="parent-litter">
            <span className="parent-litter-title">Ojciec: </span>
            {litter.dogName}
          </p>
          <div className="litter-gallery">
            {litter.litterPhotos.map((photo, index) => (
              <div
                key={index}
                className="litter-photo-container"
                onClick={() => handleOpenModal(litter.litterPhotos, index)}
              >
                <img
                  className="litter-photo"
                  src={photo}
                  alt={litter.litterName}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      {isModalOpen && (
        <Modal
          images={activeLitterPhotos}
          activeImageIndex={activeImageIndex}
          closeModal={handleCloseModal}
          showNextImage={handleShowNextImage}
          showPrevImage={handleShowPreviousImage}
        />
      )}
    </div>
  );
}

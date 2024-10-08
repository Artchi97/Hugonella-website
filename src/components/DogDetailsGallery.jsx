import "../styles/DogDetailsGallery.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dogsData from "../dogsData";
import Modal from "./Modal";
import BackButton from "./BackButton";

export default function DogDetailsGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { dogName } = useParams();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Opóźnienie przed rozpoczęciem animacji

    return () => clearTimeout(timeoutId);
  }, []);

  const filteredArray = dogsData.filter((dog) => dog.dogName === dogName);

  if (filteredArray.length === 0) {
    return (
      <h2 className="dog-not-found">Nie znaleziono zdjęć dla tego psa!</h2>
    );
  }

  const images = filteredArray[0].images;

  function handleOpenModal(index) {
    setActiveImageIndex(index);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleShowPreviousImage() {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function handleShowNextImage() {
    setActiveImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div
      className={`dog-gallery-main-container fade-in ${
        isVisible ? "fade-in-active" : ""
      }`}
    >
      {images.map((photo, index) => (
        <div key={index} className="dog-gallery-container">
          <img
            className="dog-gallery-photo"
            src={photo}
            alt={dogName}
            onClick={() => handleOpenModal(index)}
          />
        </div>
      ))}

      {isModalOpen && (
        <Modal
          images={images}
          activeImageIndex={activeImageIndex}
          closeModal={handleCloseModal}
          showNextImage={handleShowNextImage}
          showPrevImage={handleShowPreviousImage}
        />
      )}
      <BackButton className="back-button">{"<<"} Wstecz</BackButton>
    </div>
  );
}

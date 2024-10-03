import "../styles/Modal.css";

export default function Modal({
  images,
  activeImageIndex,
  closeModal,
  showNextImage,
  showPrevImage,
}) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <button className="previous-image" onClick={showPrevImage}>
          &#10094;
        </button>
        <div className="modal-image-container">
          <img
            src={images[activeImageIndex]}
            alt="dog-image"
            className="modal-image"
          />
        </div>
        <button className="next-image" onClick={showNextImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

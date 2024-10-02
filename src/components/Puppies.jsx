import "../styles/Puppies.css";
import litters from "../litters";

export default function Puppies() {
  return (
    <div className="dog-details-gallery-container">
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
            {litter.litterPhotos.map((photo) => (
              <div className="litter-photo-container">
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
    </div>
  );
}

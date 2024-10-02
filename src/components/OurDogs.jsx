import { Link } from "react-router-dom";

import "../styles/OurDogs.css";
import dogsData from "../dogsData";

export default function OurDogs() {
  const retiredDogs = dogsData.filter((dog) => dog.status === "retired");
  const activeDogs = dogsData.filter((dog) => dog.status === "active");

  return (
    <div className="our-dogs-image-container">
      {activeDogs.map((dog) => (
        <div key={dog.dogName} className="dog-main-container">
          <Link to={`/dog-details/${dog.dogName}`}>
            <div className="dog-container">
              <img
                className="dog-main-image"
                src={dog.images[0]}
                alt={dog.dogName}
                loading="lazy"
              />
            </div>
          </Link>
          {dog.titles.map((title, index) => (
            <p key={index} className="dog-title">
              {title}
            </p>
          ))}
          <p className="dog-official-name">{dog.fullName}</p>
          <p className="dog-name">"{dog.dogName}"</p>
        </div>
      ))}

      <h2 className="h2-retired">Na emeryturze</h2>

      {retiredDogs.map((dog, index) => (
        <div key={index} className="dog-main-container">
          <Link to={`/dog-details/${dog.dogName}`}>
            <div className="dog-container" key={index}>
              <img
                className="dog-main-image"
                src={dog.images[0]}
                alt={dog.dogName}
                loading="lazy"
              />
            </div>
          </Link>
          {dog.titles.map((title, index) => (
            <p key={index} className="dog-title">
              {title}
            </p>
          ))}
          <p className="dog-official-name">{dog.fullName}</p>
          <p className="dog-name">"{dog.dogName}"</p>
        </div>
      ))}
    </div>
  );
}

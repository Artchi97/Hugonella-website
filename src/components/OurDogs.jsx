import "../styles/OurDogs.css";
import dogsData from "../dogsData";

export default function OurDogs() {
  const retiredDogs = dogsData.filter((dog) => dog.status === "retired");
  const activeDogs = dogsData.filter((dog) => dog.status === "active");

  return (
    <div className="our-dogs-image-container">
      {activeDogs.map((dog) => (
        <div key={dog.dogName} className="dog-main-container">
          <div className="dog-container">
            <img
              className="dog-main-image"
              src={dog.images.large[0]}
              srcSet={`${dog.images.medium[0]} 768w, ${dog.images.small[0]} 600w`}
              alt={dog.dogName}
            />
          </div>
          {dog.titles.map((title) => (
            <p className="dog-title">{title}</p>
          ))}
          <p className="dog-official-name">{dog.fullName}</p>
          <p className="dog-name">"{dog.dogName}"</p>
        </div>
      ))}

      <h2 className="h2-retired">Na emeryturze</h2>

      {retiredDogs.map((dog) => (
        <div className="dog-main-container">
          <div className="dog-container" key={dog.dogName}>
            <img
              className="dog-main-image"
              src={dog.images.large[0]}
              alt={dog.dogName}
            />
          </div>
          {dog.titles.map((title) => (
            <p className="dog-title">{title}</p>
          ))}
          <p className="dog-official-name">{dog.fullName}</p>
          <p className="dog-name">"{dog.dogName}"</p>
        </div>
      ))}
    </div>
  );
}

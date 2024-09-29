import { useParams } from "react-router-dom";
import "../styles/DogShows.css";

export default function DogShows({ showsData }) {
  const { dogName } = useParams();

  const rows = Array.isArray(showsData?.values) ? showsData.values : [];
  const filteredShows = rows.filter((row) => row[1] === dogName);

  return (
    <div className="shows-section">
      <span className="detail-title shows-title">Wystawy: </span>
      {filteredShows.length > 0 ? (
        filteredShows.map((show, index) => (
          <div key={index} className="show-container">
            <h3 className="show-name">{`${show[2]}`}</h3>
            <p className="show-place">
              <span className="show-titles">Miejsce: </span>
              {`${show[3]}`}
            </p>
            <p className="show-date">
              <span className="show-titles">Data: </span>
              {` ${show[4]}`}
            </p>
            <p className="show-judge">
              <span className="show-titles">Sędzia: </span>
              {`${show[5]}`}
            </p>
            <p className="show-opinion">
              <span className="show-titles">Ocena: </span>
              {`${show[6]}`}
            </p>
          </div>
        ))
      ) : (
        <p key={Math.random()} className="no-show">
          Brak wystaw dla tego psa.
        </p>
      )}
    </div>
  );
}

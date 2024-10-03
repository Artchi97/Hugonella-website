import { useParams } from "react-router-dom";
import "../styles/DogShows.css";
import BackButton from "./BackButton";

function normalizeDate(dateStr) {
  if (dateStr.includes("-")) {
    const range = dateStr.split("-");
    const endDateStr = range[range.length - 1].trim();
    return parseDate(endDateStr);
  } else {
    return parseDate(dateStr);
  }
}

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split(".");
  return new Date(`${year}-${month}=${day}`);
}

export default function DogShows({ showsData }) {
  const { dogName } = useParams();

  const rows = Array.isArray(showsData?.values) ? showsData.values : [];
  const filteredShows = rows.filter((row) => row[1] === dogName);

  const sortedShows = filteredShows.sort((a, b) => {
    const dateA = normalizeDate(a[4]);
    const dateB = normalizeDate(b[4]);
    return dateB - dateA;
  });

  return (
    <div className="shows-section">
      <span className="shows-title">Wystawy: </span>
      {sortedShows.length > 0 ? (
        sortedShows.map((show, index) => (
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
      <BackButton className="back-button">{"<<"} Wstecz</BackButton>
    </div>
  );
}

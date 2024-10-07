import "../styles/Feed.css";

export default function Feed({ feedData }) {
  const feedContent = Array.isArray(feedData?.values) ? feedData.values : [];

  return (
    <>
      <h2 className="feed-main-title">Aktualności</h2>
      <div className="feed-container">
        {feedContent.length > 1 ? (
          feedContent.slice(1).map((feed, index) => (
            <div className="new-feed-container" key={index}>
              <h2 className="feed-title">{feed[2]}</h2>
              <p className="feed-date">{feed[1]}</p>
              <div className="description-photo-div">
                <p className="feed-content">{feed[3]}</p>
                <img src={feed[4]} alt={feed[2]} className="feed-photo" />{" "}
              </div>{" "}
            </div>
          ))
        ) : (
          <p>Brak treści do wyświetlenia.</p>
        )}
      </div>
    </>
  );
}

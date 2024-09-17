import "../styles/MainPage.css";
import teddy from "../assets/Teddy2.jpg";

export default function MainPage() {
  return (
    <div className="photo-description-div">
      <div className="slider">
        <img src={teddy} alt="Teddy" />
      </div>
      <div className="main-sentence">
        <p>
          Witaj na stronie hodowli labrador retriever{" "}
          <span className="breeding-name">HugoNella FCI</span> - w miejscu,
          gdzie pasja łączy się z miłością do psów!
        </p>
        <span className="main-quote">
          "Nasz dom jest pełen merdających ogonów, pocałunków, mokrych nosów i
          miłości"
        </span>
      </div>
    </div>
  );
}

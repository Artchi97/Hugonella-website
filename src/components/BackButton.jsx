import "../styles/BackButton.css";
import { useNavigate } from "react-router-dom";

export default function BackButton({ children, ...props }) {
  const navigate = useNavigate();

  return (
    <button {...props} onClick={() => navigate(-1)}>
      {children}
    </button>
  );
}

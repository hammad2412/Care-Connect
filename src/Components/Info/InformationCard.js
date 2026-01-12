import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard({ icon, title, description }) {
  return (
    <div className="info-cards">
      <span className="quote-icon">
        <FontAwesomeIcon icon={faQuoteLeft} />
      </span>
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={icon} />
      </span>

      <p className="info-card-title">{title}</p>

      <p className="info-card-description">{description}</p>
    </div>
  );
}

export default InformationCard;

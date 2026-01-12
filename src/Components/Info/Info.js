import InformationCard from "./InformationCard";
import {
  faTruckMedical,
  faHeartPulse,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import "./Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Care That Comes to You</span>
        </h3>
        <p className="info-description">
          Care Connect use technology to remove barriers in healthcare delivery.
          Through our platform, patients can consult experienced doctors online,
          receive accurate medical advice, and manage prescriptions with ease.
          Our goal is to make healthcare faster, smarter, and more accessible
          for everyday needs.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Instant Medical Care"
          description="Get immediate medical guidance when unexpected health concerns arise. Our experienced doctors provide timely advice, help assess symptoms, and guide you on the next steps, ensuring you receive reliable support 24/7 when quick decisions matter most."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Advanced Heart Care"
          description="Protect your heart with expert medical consultations designed to monitor and manage cardiovascular health. Our experienced cardiologists and medical experts offer personalized guidance, preventive care strategies, and treatment insights to help you maintain a strong, healthy heart every day."
          icon={faHeartPulse}
        />
        <InformationCard
          title="Confident Dental Care"
          description="
          Achieve and maintain a healthy smile with professional dental consultations. From oral health advice to preventive care guidance, our dental experts help you address concerns early and maintain long-term dental wellness with confidence."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;

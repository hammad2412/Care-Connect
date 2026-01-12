import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LegalDocs.css";
import logo from "../../Assets/logo.png";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          <img src={logo} alt="Logo" className="legal-logo" /> Care Connect
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">Our Goal</p>
        <p className="legal-description">
          Welcome to Care Connect, your reliable digital healthcare solution.
          Our goal is to make quality medical services accessible and
          personalized for everyone. By accessing and using our platform, you
          agree to comply with the terms stated in our Privacy Policy and Terms
          of Service to ensure a safe experience.
        </p>

        <p className="legal-title">Data Usage Policy</p>
        <p className="legal-description">
          Your privacy matters to us. Our Privacy Policy explains how we gather,
          store, and safeguard your personal and health-related data. We follow
          strict security measures to protect your information and maintain
          complete confidentiality at all times.
        </p>

        <p className="legal-title">Platform Guidelines</p>
        <p className="legal-description">
          By using Care Connect, you accept our Terms of Service. These terms
          describe how to use our platform responsibly, communicate with
          doctors, and understand the obligations of all users. Reading these
          terms carefully helps create a smooth experience for everyone.
        </p>

        <p className="legal-title">Speak with a Doctor</p>
        <p className="legal-description">
          Care Connect connects you with qualified medical professionals for
          online consultations. While these sessions do not replace physical
          doctor visits, they provide a convenient way to receive advice,
          prescriptions, and health guidance. Providing accurate details helps
          doctors offer better care.
        </p>

        <p className="legal-title">Easy Booking Guide</p>
        <p className="legal-description">
          Care Connect makes healthcare simple and accessible. Select your
          specialist, book an appointment, and consult virtually with ease. Our
          doctors provide customized care plans based on your needs. In
          emergencies, always seek immediate help from nearby medical services.
        </p>
      </div>

      <div className="legal-footer">
        <p>©2026 Care Connect. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;

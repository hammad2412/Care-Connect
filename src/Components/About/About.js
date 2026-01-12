import Doctor from "../../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "./About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Experience next-level healthcare with Care Connect, your trusted
          digital health partner. Access elite medical consultations,
          personalized treatment plans, and verified specialists anytime,
          anywhere. Enjoy seamless appointment booking, secure communication,
          and compassionate care.
        </p>

        <h4 className="about-text-title">3 Simple Steps</h4>

        <SolutionStep
          title="✨ Select Your Specialist"
          description="Choose from carefully selected specialists offering expertise, experience, and compassionate care tailored to your unique health needs."
        />

        <SolutionStep
          title="⏰ Instant Scheduling"
          description="Book appointments effortlessly at your preferred time and date, ensuring comfort, flexibility, and stress-free medical consultations"
        />

        <SolutionStep
          title="💊 Receive Tailored Treatment"
          description="Receive personalized treatment plans designed specifically for your condition, ensuring effective care and long-term health improvement."
        />
      </div>
    </div>
  );
}

export default About;

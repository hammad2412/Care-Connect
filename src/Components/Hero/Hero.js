import { useEffect, useState } from "react";
import Doctor from "../../Assets/doctor-hero01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);
  const [patientsCount, setPatientsCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [counterStarted, setCounterStarted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      // Scroll-to-top button logic (existing)
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }

      // Counter trigger logic
      if (window.scrollY > 10 && !counterStarted) {
        setCounterStarted(true);

        // Patients counter
        let patientStart = 0;
        const patientEnd = 145000;
        const patientInterval = setInterval(() => {
          patientStart += 5000;
          if (patientStart >= patientEnd) {
            setPatientsCount(patientEnd);
            clearInterval(patientInterval);
          } else {
            setPatientsCount(patientStart);
          }
        }, 50);

        // Doctors counter
        let doctorStart = 0;
        const doctorEnd = 50;
        const doctorInterval = setInterval(() => {
          doctorStart += 2;
          if (doctorStart >= doctorEnd) {
            setDoctorsCount(doctorEnd);
            clearInterval(doctorInterval);
          } else {
            setDoctorsCount(doctorStart);
          }
        }, 40);
      }
    };

    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, [counterStarted]);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Care You Deserve</p>
          <h2 className="text-title">Because Waiting Rooms Are Overrated</h2>
          <p className="text-descritpion">
            Skip the queues. Talk to real doctors online, get prescriptions,
            medical advice, and care without leaving your couch.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>{patientsCount.toLocaleString()}+</p>
              <p>Patients Served</p>
            </div>

            <div className="text-stats-container">
              <p>🩺{doctorsCount}+</p>
              <p>Expert Doctors</p>
            </div>

            <div className="text-stats-container">
              <p>🥼10+</p>
              <p>Years of Experience</p>
            </div>

            <div className="text-stats-container">
              <p>📞24/7</p>
              <p>Medical Support</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;

import DoctorCard from "./DoctorCard";
import profile1 from "../../Assets/profile-01.png";
import profile2 from "../../Assets/profile-02.png";
import profile3 from "../../Assets/profile-03.png";
import profile4 from "../../Assets/profile-04.png";
import "./Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Doctors You Can Trust</span>
        </h3>

        <p className="dt-description">
          Meet our expert team of specialist doctors committed to delivering
          high-quality healthcare at Care Connect. Rely on their expertise for
          your complete well-being.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Chetan Pareek"
          title="General Surgeons"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Hiral Narwal"
          title="Hematologists"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Priyanka Bunker"
          title="Endocrinologists"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Himansh"
          title="Urologist"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;

import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Info from "../Components/Info/Info";
import About from "../Components/About/About";
import BookAppointment from "../Components/BookAppointment/BookAppointment";
import Reviews from "../Components/Reviews/Reviews";
import Doctors from "../Components/Doctor/Doctors";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;

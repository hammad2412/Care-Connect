import "./Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">Care Connect</p>
            <p className="ft-description">
              World-class medical care online and healthcare at your fingertips.
              Talk to Doctors instantly
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">What We Offer</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Instant Medical Care</a>
            </li>
            <li>
              <a href="#services">Advanced Heart Care</a>
            </li>
            <li>
              <a href="#services">Confident Dental Care</a>
            </li>
            <li>
              <a href="#services">Prescription</a>
            </li>
            <li>
              <a href="#services">Insights for Doctors</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>Our Goal</Link>
            </li>
            <li>
              <Link to={"/legal"}>Data Usage Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Platform Guidelines</Link>
            </li>
            <li>
              <Link to={"/legal"}>Speak with a Doctor</Link>
            </li>
            <li>
              <Link to={"/legal"}>Easy Booking Guide</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="ft-list" id="contact">
            <p className="ft-list-title">Talk To Us</p>
            <ul className="ft-list-items">
              <li>
                <Link to={"/appointment"}>support@careconnect.com</Link>
              </li>
              <li>
                <Link to={"/appointment"}>appointment@careconnect.com</Link>
              </li>
              <li>
                <Link to={"/appointment"}>+91 99838 56789</Link>
              </li>
              <li>
                <Link to={"/appointment"}>+91 99838 98745</Link>
              </li>
            </ul>
          </div>
          <ul className="ft-social-links">
            <li>
              <a
                href="https://linkedin.com/in/hammadkhan1224"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/hammad2412"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 496 512"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.7-5.2 3.7-3.4.3-5.6-1.3-5.6-3.7 
                  0-2 2.3-3.7 5.2-3.7 3.4-.3 5.6 1.3 5.6 3.7zm-31.1-4.5
                  c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2
                  c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 3-4.6 5.2
                  .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-3 4.6-5.2-.3-2-3-3.3-5.9-2.6zM248 
                  8C111 8 0 119 0 256c0 110.5 71.8 204.2 171.5 237.2 
                  12.5 2.3 17.1-5.4 17.1-12v-44.1c-69.8 15.1-84.5-33.7-84.5-33.7
                  -11.4-29-27.9-36.7-27.9-36.7-22.9-15.7 1.7-15.4 1.7-15.4
                  25.4 1.8 38.8 26.1 38.8 26.1 22.6 38.7 59.3 27.5 73.8 21
                  2.3-16.4 8.8-27.5 16-33.8-55.7-6.3-114.2-27.9-114.2-124.1
                  0-27.4 9.8-49.8 25.8-67.4-2.6-6.3-11.2-31.7 2.4-66.1
                  0 0 21-6.7 68.8 25.7 20-5.6 41.5-8.4 62.8-8.5
                  21.3.1 42.8 2.9 62.8 8.5 47.8-32.4 68.8-25.7 68.8-25.7
                  13.6 34.4 5 59.8 2.4 66.1 16 17.6 25.8 40 25.8 67.4
                  0 96.5-58.6 117.8-114.5 124 9 7.7 17 22.9 17 46.2
                  v68.6c0 6.6 4.6 14.4 17.3 12C424.2 460.2 496 366.5 496 256
                  496 119 385 8 248 8z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>©2026 Care Connect. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

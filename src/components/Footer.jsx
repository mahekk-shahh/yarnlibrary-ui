import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-50 pt-10 pb-5 shadow-[0_-2px_10px_3px_rgba(0,0,0,0.1)]">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-start px-5">
        {/* Logo Section */}
        <div className="">
          <img src={"./images/logo-1.jpeg"} alt="Yarn Library" className="h-20" />
          <h5 className="footer-heading mt-8">Connect with us!</h5>
          <div className="flex my-3">
            <a
              href="https://www.instagram.com/yarnlibrary"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4"
            >
              <img
                src={'./images/instagram_color.png'}
                alt="Instagram"
                style={{ width: 20, height: 20 }}
              />
            </a>
            <a
              href="https://www.facebook.com/p/Yarn-library-100063981254212/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4"
            >
              <img
                src={'./images/facebook_color.png'}
                alt="Facebook"
                style={{ width: 20, height: 20 }}
              />
            </a>
            <a
              href="https://in.linkedin.com/in/sanjay-shah-a64081226"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4"
            >
              <img
                src={'./images/linkedin_color.png'}
                alt="LinkedIn"
                style={{ width: 20, height: 20 }}
              />
            </a>
            <a
              href="https://wa.me/919892539790?text=Hello%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={'./images/whatsapp_color.png'}
                alt="WhatsApp"
                style={{ width: 20, height: 20 }}
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-4">
          <h5 className="footer-heading">Quick Links</h5>
          <ul className="list-unstyled mt-3">
            <li>
              <Link
                to="/about"
                className="text-decoration-none text-dark footer-link"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/news"
                className="text-decoration-none text-dark footer-link"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/exhibitions"
                className="text-decoration-none text-dark footer-link"
              >
                Exhibitions
              </Link>
            </li>
            <li>
              <Link
                to="/listing"
                className="text-decoration-none text-dark footer-link"
              >
                Listing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-decoration-none text-dark footer-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="">
          <h5 className="footer-heading">Contact</h5>
          <p className="mt-3 flex gap-1.5">
            <MapPin size={15} className="mt-1" />
            Mittal Industrial Estate, Marol,
            <br />
            Andheri East, Mumbai,
            <br />
            Maharashtra 400059
          </p>
          <p className="mb-1 flex items-center gap-1.5">
            <Phone size={15} />
            +91 98925 39790
          </p>
          <p className="mb-1 flex items-center gap-1.5">
            <Mail size={15} />
            sanjayshah040@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

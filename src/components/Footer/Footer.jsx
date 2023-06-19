import React,{useState} from "react";
import "./Footer.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault()
    setEmail(e.target.value);
  };


const handleSubscribe = () => {
    setIsSubscribed(true);

  toast.success("Thank you for subscribing!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

  return (
    <div className="footer-container">
      <div className="footer-text2">
        <p> Join the Adventure newsletter to receive our best vacation deals</p>
        <p> You can unsubscribe at any time.</p>
        <div className="footer-text">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Button buttonStyle="btn--outline" buttonSize="btn--medium" onClick={handleSubscribe}>
            Subscribe
          </Button>
        </div>
        
    <ToastContainer />

      </div>
      <div className="footer-link-wrapper">
        <div class="footer-link-items">
          <h2>About Us</h2>
          <Link to="/">How it works</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Investors</Link>
          <Link to="/">Terms of Service</Link>
        </div>
        <div class="footer-link-items">
          <h2>Contact Us</h2>
          <Link to="/">Contact</Link>
          <Link to="/">Support</Link>
          <Link to="/">Destinations</Link>
          <Link to="/">Sponsorships</Link>
        </div>
        <div class="footer-link-items">
          <h2>Videos</h2>
          <Link to="/">Submit Video</Link>
          <Link to="/">Ambassadors</Link>
          <Link to="/">Agency</Link>
          <Link to="/">Influencer</Link>
        </div>
        <div class="footer-link-items">
          <h2>Social Media</h2>
          <Link to="/">Instagram</Link>
          <Link to="/">Facebook</Link>
          <Link to="/">Youtube</Link>
          <Link to="/">Twitter</Link>
        </div>
      </div>
      <div className="social-media">
        <div>
          <Link className="link" to="/">
            TRVL
          </Link>
          <FontAwesomeIcon icon={faTypo3} size="2x" />
        </div>
        <div>
          <span>TRVL &copy; 2023</span>
        </div>

        <div className="social-icons">
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

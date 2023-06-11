import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className=" py-3 footerBG">
      <div className="container mx-auto ">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-12  text-center text-lg-start fontColor">
            copyright&copy;coursedeep 2023
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 my-3 my-lg-0 text-center">
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://twitter.com/javaScripLogic"
              aria-label="Parveen Anand Twitter Profile"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.facebook.com/jharnakhatun2/"
              aria-label="Parveen Anand Facebook Profile"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.linkedin.com/in/jharna-khatun2/"
              aria-label="Parveen Anand LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 text-center text-lg-end">
            <a className="text-decoration-none me-3 fontColor" href="/">
              Privacy Policy
            </a>
            <a className=" text-decoration-none fontColor" href="/">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

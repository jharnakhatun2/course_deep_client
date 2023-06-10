import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer class=" py-4 ">
      <div class="container mx-auto">
        <div class="row align-items-center">
          <div class="col-lg-4 text-sm-center text-lg-start">
            Copyright &copy; Course Deep 2023
          </div>
          <div class="col-lg-4 my-3 my-lg-0 text-lg-center">
            <a
              class="btn btn-dark btn-social mx-2"
              href="https://twitter.com/javaScripLogic"
              aria-label="Parveen Anand Twitter Profile"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="https://www.facebook.com/jharnakhatun2/"
              aria-label="Parveen Anand Facebook Profile"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="https://www.linkedin.com/in/jharna-khatun2/"
              aria-label="Parveen Anand LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a class="link-dark text-decoration-none me-3" href="/">
              Privacy Policy
            </a>
            <a class="link-dark text-decoration-none" href="/">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

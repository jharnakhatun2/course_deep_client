import React from "react";

const About = () => {
  return (
    <div className="about-bg">
    <div className="container py-lg-5 py-sm-3 mb-4">
      <div className="text-center pt-5 pb-5">
        <h2 className="text-uppercase title-shadow">About Us</h2>
        <hr className="hr blurry-ruler " />
        <p className="text-muted">
        Discover Our Story - Unveiling the Journey of Course Deep
        </p>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src="assets/img/about/1.jpg"
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>July 2020</h4>
              <h4 className="subheading">Our Humble Beginnings</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
              From humble beginnings, our programming platform emerged with a mission to empower aspiring coders. Join our journey as we inspire and educate developers worldwide.
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src="assets/img/about/2.jpg"
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>March 2021</h4>
              <h4 className="subheading">A Platform is Born</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
              Witness the birth of a groundbreaking platform for programming courses. Dive into a world of immersive learning, expert guidance, and unparalleled resources. Join us on this transformative journey!
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src="assets/img/about/3.jpg"
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>August 2022</h4>
              <h4 className="subheading">Transition to Full Service</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
              Embark on our remarkable journey of transition to a full-service programming course website. Explore comprehensive offerings, from beginner to advanced, as we elevate your learning experience to new heights. Join us in embracing this exciting evolution!
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src="assets/img/about/4.jpg"
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>June 2023</h4>
              <h4 className="subheading">Phase Two Expansion</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
              Welcome to the Phase Two expansion of our programming course website! Immerse yourself in an enhanced learning environment, with an array of new courses, advanced tools, and expanded resources. Join us as we unlock the next level of your coding journey!
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <h4>
              Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
          </div>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default About;

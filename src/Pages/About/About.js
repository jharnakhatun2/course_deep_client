import React from "react";

const About = () => {
  return (
    <div className="about-bg">
    <div class="container py-5 mb-4">
      <div class="text-center pt-5 pb-5">
        <h2 class="text-uppercase title-shadow">About Us</h2>
        <hr class="hr blurry-ruler " />
        <p class="text-muted">
        Discover Our Story - Unveiling the Journey of Course Deep
        </p>
      </div>
      <ul class="timeline">
        <li>
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="assets/img/about/1.jpg"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>July 2020</h4>
              <h4 class="subheading">Our Humble Beginnings</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
              From humble beginnings, our programming platform emerged with a mission to empower aspiring coders. Join our journey as we inspire and educate developers worldwide.
              </p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="assets/img/about/2.jpg"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>March 2021</h4>
              <h4 class="subheading">A Platform is Born</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
              Witness the birth of a groundbreaking platform for programming courses. Dive into a world of immersive learning, expert guidance, and unparalleled resources. Join us on this transformative journey!
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="assets/img/about/3.jpg"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>August 2022</h4>
              <h4 class="subheading">Transition to Full Service</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
              Embark on our remarkable journey of transition to a full-service programming course website. Explore comprehensive offerings, from beginner to advanced, as we elevate your learning experience to new heights. Join us in embracing this exciting evolution!
              </p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="assets/img/about/4.jpg"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>June 2023</h4>
              <h4 class="subheading">Phase Two Expansion</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
              Welcome to the Phase Two expansion of our programming course website! Immerse yourself in an enhanced learning environment, with an array of new courses, advanced tools, and expanded resources. Join us as we unlock the next level of your coding journey!
              </p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image">
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

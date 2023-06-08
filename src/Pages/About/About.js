import React from "react";

const About = () => {
  return (
    <div class="container py-5">
      <div class="text-center pb-4">
        <h2 class="text-uppercase">Latest Courses</h2>
        <p class="text-muted">
          An investment in knowledge pays the best interest
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
              <h4>2009-2011</h4>
              <h4 class="subheading">Our Humble Beginnings</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
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
              <h4>March 2011</h4>
              <h4 class="subheading">An Agency is Born</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
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
              <h4>December 2015</h4>
              <h4 class="subheading">Transition to Full Service</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
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
              <h4>July 2020</h4>
              <h4 class="subheading">Phase Two Expansion</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
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
  );
};

export default About;

import React from "react";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div class="container py-5">
        <div class="text-center pb-5 pt-5">
          <h2 class="text-uppercase text-white title-shadow">Contact Us</h2>
          <p class="text-warning"> Connection awaits when you contact me</p>
        </div>
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div class="row align-items-stretch mb-5">
            <div class="col-md-6">
              <div class="form-group">
                {/* <!-- Name input--> */}
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  data-sb-validations="required"
                />
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <div class="form-group">
                {/* <!-- Email address input--> */}
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  data-sb-validations="required,email"
                />
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              <div class="form-group mb-md-0">
                {/* <!-- Phone number input-->
                                <!-- Message input--> */}
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  data-sb-validations="required"
                />
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group form-group-textarea mb-md-0">
                {/*  */}
                <textarea
                  class="form-control"
                  id="message"
                  placeholder="Your Message *"
                  data-sb-validations="required"
                ></textarea>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Submit success message-->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted--> */}
          <div class="d-none" id="submitSuccessMessage">
            <div class="text-center text-white mb-3">
              <div class="fw-bolder">Form submission successful!</div>
              To activate this form, sign up at
              <br />
              <a href="https://startbootstrap.com/solution/contact-forms">
                https://startbootstrap.com/solution/contact-forms
              </a>
            </div>
          </div>
          {/* <!-- Submit error message-->
                    
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form--> */}
          <div class="d-none" id="submitErrorMessage">
            <div class="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>
          {/* <!-- Submit Button--> */}
          <div class="d-grid gap-2 col-3 mx-auto">
            <button
              class="btn btn-warning btn-xl text-uppercase mb-5"
              id="submitButton"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

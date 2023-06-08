import React from 'react'

const Subscribe = () => {
  return (
    // <!-- Call to Action-->
    <div class="call-to-action text-white text-center" id="signup">
    <div class="container position-relative">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <h2 class="mb-4">Ready to get started? Sign up now!</h2>
               
                <form class="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                    {/* <!-- Email address input--> */}
                    <div class="row">
                        <div class="col">
                            <input class="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                            <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                            <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                        </div>
                        <div class="col-auto"><button class="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                    </div>
                    
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                            <p>To activate this form, sign up at</p>
                            <a class="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                   
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Subscribe

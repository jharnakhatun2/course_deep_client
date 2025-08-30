import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../layer/UserContext";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  


  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      setError(alert("Password Should be 8 characters or more."));
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        // when login, will go to home page
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // when login, will go to home page
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    gitHubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // when login, will go to home page
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleMessage = () => {
    toast.success("Thank you for your registration");
  };

  return (
    <div className="regis-section">
      <div className="p-5">
        <h1 className="text-3xl font-bold text-center">Register now!</h1>
        <div className="col-lg-4 col-md-6 mx-auto bgColorRegister rounded p-5">
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name :</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder=" Enter password"
                required
              />
            </Form.Group>
            <div>
              <Form.Text className="text-muted">
                Already have an account?
                <Link to="/login" className="btn btn-active btn-link">
                  Log In
                </Link>
              </Form.Text>
            </div>
            <Button
              onClick={handleMessage}
              className="btn btn-warning w-100"
              type="submit"
            >
              Register
            </Button>
            <ToastContainer />
          </Form>
          <div className="mx-auto">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline border-success my-3 w-100 mx-auto"
            >
              <FcGoogle /> Google SignIn
            </button>
            <br></br>
            <button
              onClick={handleGithubSignIn}
              className="btn btn-outline bg-dark text-white w-100"
            >
              <BsGithub /> Github SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

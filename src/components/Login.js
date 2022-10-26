import React, { useContext } from 'react';
import { Button,Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../layer/UserContext';


const Login = () => {

  const { userLogIn } = useContext(AuthContext);

  // When login, will go to home page
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/checkout';

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        // when login, will go to home page
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <div className="logInSection">
      <div className="p-5">
        <h1 className="text-3xl font-bold text-center">Login now!</h1>
        <div className="w-50 mx-auto bg-light rounded p-5">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder=" Enter password" required />

          </Form.Group>
          <div>
          <Form.Text className="text-muted">
            Forgot password?<Link to="/login" className="btn btn-active btn-link">Log In</Link>
          </Form.Text>
          </div>
          <Button className="btn btn-warning w-100" type="submit">
            Log In
          </Button>
          <div>
          <Form.Text className="text-muted">
            Create a new account?<Link to="/register" className="btn btn-active btn-link">Register</Link>
          </Form.Text>
          </div>
        </Form>
      </div>
    </div>
  </div>
  );
};

export default Login;
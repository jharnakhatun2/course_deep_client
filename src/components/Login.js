import React, { useContext } from 'react';
import { Button,Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../layer/UserContext';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';


const Login = () => {

  const { userLogIn,googleSignIn, gitHubSignIn } = useContext(AuthContext);

  // When login, will go to home page
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

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

  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
    })
    .catch(error => console.error(error))
}

const handleGithubSignIn =()=>{
    gitHubSignIn()
    .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
    })
    .catch(error => console.error(error))
}

  return (
    <div className="logInSection">
      <div className="p-4 lg:p-5">
        <h1 className="text-3xl font-bold text-center">Login now!</h1>
        <div className="col-lg-4 col-md-6 mx-auto bg-light rounded p-5">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder=" Enter password" required />
          </Form.Group>
          
          <Button className="btn btn-warning w-100" type="submit">
            Log In
          </Button>
          <div>
          <Form.Text className="text-muted">
            Create a new account?<Link to="/register" className="btn btn-active btn-link">Register</Link>
          </Form.Text>
          </div>
        </Form>
        <div className="mx-auto">
          <Button onClick={handleGoogleSignIn} className="btn btn-outline border-success my-3  mx-auto w-100"><FcGoogle/> Google SignIn</Button><br></br>
          <Button onClick={handleGithubSignIn} className="btn btn-outline bg-dark text-white w-100 "><BsGithub/> Github SignIn</Button>
          </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
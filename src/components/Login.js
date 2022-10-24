import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../layer/UserContext';


const Login = () => {

  const {userLogIn} = useContext(AuthContext);

  // When login, will go to home page
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/order';

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password= form.password.value;
    console.log (email, password);

    userLogIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      // when login, will go to home page
      navigate(from,{replace: true});
    })
    .catch(error => {
      console.error(error);
    });
  }
  return (
      <div className="hero min-h-screen bg-base-200 section">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="p-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <div className="card max-w-sm">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email :</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Password : </span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
                <small>Forgot password?<Link to="/login" className="btn btn-active btn-link">Log In</Link></small>
                <small className="">Create a new account?<Link to="/register" className="btn btn-active btn-link">Register</Link></small>
            </form>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
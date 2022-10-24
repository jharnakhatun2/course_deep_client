import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../layer/UserContext';
import img from './images/demo.png';

const Register = () => {

    const {createUser, googleSignIn} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const handleRegister = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 8){
            setError(alert('Password Should be 8 characters or more.'));
            return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
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
        })
        .catch(error => console.error(error))
    }
        

    
    return (
        <div className="hero min-h-screen bg-base-200 regis-section mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src={img} alt="" />
                <div className="p-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                    <div className="card max-w-sm">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name :</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email :</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Password : </span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                                <label className="label">

                                    <small>Already have an account?<Link to="/login" className="btn btn-active btn-link">Log In</Link></small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Register</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
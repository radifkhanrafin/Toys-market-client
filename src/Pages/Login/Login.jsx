import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/Provaider';
import Socal_Login from '../../Component/Socal_Login/Socal_Login';
import Lottie from "lottie-react";
import loginAnimation from "../../assets/132033-green-login.json";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';;

const Login = () => {


    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('')

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                toast("Login Successful");
                navigate(from, { replace: true })

            })
            .catch(err => {
                toast(err)
                setError(err)})
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row">
                <div className="">
                    <Lottie animationData={loginAnimation}></Lottie>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {error && <span>{error.message}</span>}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <Socal_Login></Socal_Login>

                        <p className='text-center'>If you are new please <Link className='text-blue-600' to='/signIn'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
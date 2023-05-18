import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/Provaides';
import Socal_Login from '../../Component/Socal_Login/Socal_Login';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row">
                <div className="">
                    <img className='' src='' alt="" />
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
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/Provaides';
import Lottie from "lottie-react";
import animationSignUp from "../../assets/signup.json";
const SignIn = () => {

    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)

    const handelFormInfo = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const profile = form.profile.value;
        console.log(name, email, password ,profile)

        createUser(email, password ,name)
            .then(result => {
                console.log(result.user)
                // navigate('/login')
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row">
                <div className="">
                    <Lottie className='h-[700px]' animationData={animationSignUp} loop={0} ></Lottie>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form
                            onSubmit={handelFormInfo}
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Profile URL</span>
                                </label>
                                <input type="url" placeholder="Profile Url" name='profile' className="input input-bordered" />
                            </div>
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
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p className='text-center'>Already Have an Account<Link className='text-blue-600' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
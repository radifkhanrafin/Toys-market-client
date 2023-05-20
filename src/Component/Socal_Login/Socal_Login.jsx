import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGofore } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvaider/Provaider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Socal_Login = () => {
    
    const { googleLogin, githubLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast('Login Successfull')
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }
    const handleFacebookLogin = () => {
        toast('this is demo')
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
                toast('Login Successfull')
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err)
                navigate(from)
            })
    }


    return (
        <div className='my-5'>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline mr-5">
                    <  FaGofore className='text-blue-800 text-3xl' />
                </button>
                <button onClick={handleFacebookLogin} className="btn btn-circle btn-outline mr-5">
                    <FaFacebook className='text-blue-800 text-3xl' />
                </button>
                <button onClick={handleGithubLogin} className="btn btn-circle btn-outline">
                    <FaGithub className='text-black text-3xl' />
                </button>
            </div>
        </div>
    );
};

export default Socal_Login;
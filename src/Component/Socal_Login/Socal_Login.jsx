import React ,  { useContext }  from 'react';
import { FaFacebook, FaGithub, FaGofore } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvaider/Provaides';

const Socal_Login = () => {


    const { googleLogin, githubLogin } =useContext(AuthContext)

    const handleGoogleLogin = () => {
        console.log('active google')
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(err => console.log(err))
    }
    const handleFacebookLogin = () => {
        console.log('active facebook')

    }
    const handleGithubLogin = () => {
        console.log('active github')
        githubLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(err => {
                console.log(err)
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
                    <FaFacebook   className='text-blue-800 text-3xl'/>
                </button>
                <button onClick={handleGithubLogin} className="btn btn-circle btn-outline">
                    <FaGithub  className='text-black text-3xl' />
                </button>
            </div>
        </div>
    );
};

export default Socal_Login;
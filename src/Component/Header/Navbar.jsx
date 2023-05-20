import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/Provaides';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.photoURL)
    const handleLogOut = () => {
        logOut()
    }
    const navbarList = <>
        <li><Link>Home</Link></li>
        <li><Link to='allToys'>All Toys</Link></li>
        <li><Link to='/blog'> Blogs</Link></li>
        <li><Link to='/addtoy'>Add a Toy</Link></li>

        <li>
            {user ? <>
                <Link to='/mytoys'>My Toys</Link>
                <Link onClick={handleLogOut} >Log Out</Link>
            </> : <Link to='/login'>Login</Link>}
        </li>

        <li>
            {
                user && <div className="tooltip tooltip-bottom mx-2" data-tip={user.email}>
                    <button className="-m-14">
                        <img className='w-12 -mb-5 rounded-full' src={user.photoURL} alt="" />
                    </button>
                </div>
            }
        </li>

    </>
    return (

        <div className="navbar bg-slate-400 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div className='text-center bg'>
                        <ul tabIndex={0} className="menu menu-compact mb-5 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navbarList}
                        </ul>
                    </div>
                </div>
                <Link to='/' ><img className='w-20' src="https://i.ibb.co/3CMnTmL/png-transparent-toys-center-shopping-centre-discounts-and-allowances-toy-text-photography-logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navbarList}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='font-extrabold text-2xl text-transparent bg-clip-text  bg-gradient-to-r from-blue-400 via-violet-600 to-blue-500'> <span className='text-4xl font-extrabold -mr-2 '>T</span> oys Center</Link>
            </div>
        </div>
    );
};

export default Navbar;
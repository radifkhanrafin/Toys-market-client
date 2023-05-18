import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';


export const AuthContext = createContext()
const Auth = getAuth(app)


const Provaides = ({ children }) => {
    const googleProvaider = new GoogleAuthProvider();
    const gitHubProvaider = new GithubAuthProvider();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(Auth)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(Auth, googleProvaider)
    }
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(Auth, gitHubProvaider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser);
            // console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        logOut,
        githubLogin
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Provaides;
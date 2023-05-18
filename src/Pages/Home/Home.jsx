import React, {useContext} from 'react';
import Banner from '../../Component/Header/Banner';
import { AuthContext } from '../../AuthProvaider/Provaides';

const Home = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            {/* <Banner></Banner> */}
            {/* <img src={user.photoURL} alt="" /> */}
        </div>
    );
};

export default Home;
import React, {useContext} from 'react';
import Banner from '../../Component/Header/Banner';
import { AuthContext } from '../../AuthProvaider/Provaides';
import Footer from '../../Component/Footer/Footer';

const Home = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;
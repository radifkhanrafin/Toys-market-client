import React, {useContext} from 'react';
import Banner from '../../Component/Header/Banner';
import { AuthContext } from '../../AuthProvaider/Provaides';
import Footer from '../../Component/Footer/Footer';
import ToysByCategory from '../../Component/ToysByCategory/ToysByCategory';

const Home = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            {/* <Banner></Banner> */}
            <ToysByCategory></ToysByCategory>
        </div>
    );
};

export default Home;
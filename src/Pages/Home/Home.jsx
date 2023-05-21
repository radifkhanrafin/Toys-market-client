import React, {useContext} from 'react';
import Banner from '../../Component/Header/Banner';
import ToysByCategory from '../../Component/ToysByCategory/ToysByCategory';
import PhotoGallary from '../../Component/PhotoGallary/PhotoGallary';
import Services from '../../Component/Services/Services';
import usetitle from '../../Component/Dynamic_Title/usetitle';

const Home = () => {
    usetitle('Home-Page')

    return (
        <div>
            <Banner></Banner>
            <PhotoGallary></PhotoGallary>
            <ToysByCategory></ToysByCategory>
            <Services></Services>
            
        </div>
    );
};

export default Home;
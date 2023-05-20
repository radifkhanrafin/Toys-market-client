import React, {useContext} from 'react';
import Banner from '../../Component/Header/Banner';
import { AuthContext } from '../../AuthProvaider/Provaider';
import Footer from '../../Component/Footer/Footer';
import ToysByCategory from '../../Component/ToysByCategory/ToysByCategory';
import PhotoGallary from '../../Component/PhotoGallary/PhotoGallary';
import Customer_review from '../../Component/Customer_review/Customer_review';
import Services from '../../Component/Services/Services';

const Home = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <Banner></Banner>
            <PhotoGallary></PhotoGallary>
            <ToysByCategory></ToysByCategory>
            <Customer_review></Customer_review>
            <Services></Services>
            
        </div>
    );
};

export default Home;
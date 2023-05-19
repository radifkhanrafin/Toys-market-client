import React from 'react';
import AOS from 'aos';
import { FaArrowAltCircleRight, FaBeer } from 'react-icons/fa';
import Modal from '../Modal/Modal';
const Toys_card = ({ toy }) => {
    const {
        description,
        email,
        price,
        quantity,
        rating,
        seller_name,
        sub_category,
        toys_image,
        toys_name,
        _id
    } = toy

    return (
        <div>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="card w-80 m-5 bg-base-100 shadow-xl">
                <figure><img className='p-5 w-80 h-56 ' src={toys_image} alt="car" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Model : {toys_name}</h2>
                    <h2 className="card-title">Price : {price} $</h2>
                    <p>Rating : {rating}</p>
                    <div className="card-actions justify-end">
                        <button className=""><FaArrowAltCircleRight className='text-3xl text-neutral-500' /></button>
                    </div>
                </div>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Toys_card;
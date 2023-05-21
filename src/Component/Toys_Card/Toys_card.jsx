import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { FaArrowAltCircleRight, } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
AOS.init();
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
                data-aos="fade-up-right"
                className="card w-80 m-5 bg-base-100 shadow-xl">
                <figure><img className='p-5 w-80 h-56 ' src={toys_image} alt="car" /></figure>
                <div className="card-body">
                    <div className='h-20'>
                        <h2 className="card-title">Model : {toys_name}</h2>
                        <h2 className="card-title">Price : {price} $</h2>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <Rating
                                style={{ maxWidth: 130 }}
                                value={rating}
                                readOnly
                            />
                            <p>{rating}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/toysDetails/${_id}`}><FaArrowAltCircleRight className='text-3xl text-neutral-500' /></Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Toys_card;
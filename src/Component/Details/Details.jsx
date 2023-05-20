import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const toysDetails = useLoaderData()
    console.log(toysDetails)
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
    } = toysDetails

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content w-full flex-col lg:flex-row  ">
                <div className=''>
                    <img src={toys_image} className=" w-[900px] rounded-lg shadow-2xl" />
                </div>
                <div className='space-y-3 font-semibold '>
                    <h1 className="text-3xl font-bold italic">Model : {toys_name}</h1>
                    <p className="">Price : {price}</p>
                    <p className="">Rating : {rating}</p>
                    <p className="">Quantity : {quantity}</p>
                    <p className="">Description : {description}</p>
                    <p className="opacity-70">Seller : {seller_name}</p>
                    <p className="opacity-70">Seller Email :{email}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
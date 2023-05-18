import React from 'react';

const Toys_card = ({ toy }) => {
    const { toys_name, sub_category, Quantity, email, price , toys_image, description } = toy
    return (
        <div className="card w-96 m-5 bg-base-100 shadow-xl">
            <figure><img className='p-5 ' src={toys_image} alt="car" /></figure>
            <div className="card-body">
                <h2 className="card-title">Car : {toys_name}</h2>
                <h2 className="card-title">Car : {sub_category}</h2>
                <h2 className="card-title">Car : {toys_name}</h2>
                <h2 className="card-title">Car : {toys_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Toys_card;
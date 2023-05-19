import React from 'react';

const AllToysTbl = ({ toy }) => {
    const {
        description,
        email,
        price,
        quantity,
        rating,
        seller_name,
        sub_category,
        toys_image,
        toys_name
    } = toy

    return (
        <tr>
            <td>
                <h4 className='font-bold'>{seller_name}</h4>
            </td>
            <td>
                <h4 className='font-bold'>{toys_name}</h4>
            </td>
            <td>
                <h4 className='font-bold'>{sub_category}</h4>
            </td>
            <td>
                <h4 className='font-bold'>{price}</h4>
            </td>
            <td>
                <h4 className='font-bold'>{quantity}</h4>
            </td>
            <td>
                <label htmlFor="my-modal-6" className="btn">Details</label>
            </td>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>

        </tr>

    );
};

export default AllToysTbl;




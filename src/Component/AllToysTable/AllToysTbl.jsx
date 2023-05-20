import React from 'react';
import { Link } from 'react-router-dom';

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
        toys_name,
        _id
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
            <Link to={`/toysDetails/${_id}`}>details</Link>
            </td>
            
        </tr>

    );
};

export default AllToysTbl;




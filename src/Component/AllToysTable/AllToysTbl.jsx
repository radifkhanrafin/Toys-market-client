import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTbl = ({ toy,searchResult }) => {
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
            <td td >
                <h4 className='font-bold'>{toys_name}</h4>
            </td >
            <td>
                <h4 className='font-bold'>{sub_category}</h4>
            </td>
            <td>
                <h4 className='font-bold'>{price} $</h4>
            </td>
            <td>
                <h4 className='font-bold'>{quantity} </h4>
            </td>
            <td>
                <h4 className='font-bold opacity-50'>{seller_name}</h4>
            </td>
            <td>
                <button className='bg-violet-300 w-24 py-1 rounded-md text-lg hover:bg-violet-400 '>
                    <Link to={`/toysDetails/${_id}`}>Details</Link>
                </button>

            </td>

        </tr >

    );
};

export default AllToysTbl;




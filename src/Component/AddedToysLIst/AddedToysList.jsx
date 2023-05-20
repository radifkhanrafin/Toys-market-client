import React from 'react';
import {  FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const AddedToysList = ({ toy, index, deleteItems }) => {
    const {
        description,
        email,
        price,
        quantity,
        rating,
        seller_name,
        sub_category,
        toys_image,
        toys_name ,
        _id
     } = toy

    return (
        <tr>
            <td >
                <button className='mr-4' onClick={() => deleteItems(_id)}><FaTrash className='text-xl' /></button>
                <button><Link to={`/updateData/${_id}`}><FaPen className='text-xl' /></Link></button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="mask mask-squircle w-36 ">
                        <img src={toys_image} alt="toys" />
                    </div>

                </div>
            </td>
            <td>
                <h4 className='font-bold'>{toys_name}</h4>
            </td>
            <td>
                <h4 className='font-bold'>{sub_category}</h4>
            </td>
            <td>
                <h4 className='font-bold'>{quantity}</h4>
            </td>
            <td>
                <h4 className='font-bold'>{email}</h4>
            </td>
            <th>
                <Link to={`/toysDetails/${_id}`}>details</Link>
            </th> 
        </tr>
    );
};

export default AddedToysList;
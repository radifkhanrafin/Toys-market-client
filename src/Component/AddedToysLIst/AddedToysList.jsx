import React from 'react';
import { FaBeer, FaPen, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';


const AddedToysList = ({ toy, index, deleteItems, updateItems }) => {
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
            <td>{index + 1}</td>
            <td >
                <button className='mr-4' onClick={() => deleteItems(_id)}><FaTrash className='text-xl' /></button>
                <button onClick={() => updateItems(_id)}><FaPen className='text-xl' /></button>
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default AddedToysList;
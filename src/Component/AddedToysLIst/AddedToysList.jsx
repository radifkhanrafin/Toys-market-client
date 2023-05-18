import React from 'react';
import { FaBeer, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';


const AddedToysList = ({ toy , deleteItems }) => {
    const { Quantity, Seller, description, sub_category, toys_image, toys_name, _id } = toy



  


    return (
        <tr>
            <td>
                <button onClick={() => deleteItems(_id)}><FaTrash className='text-2xl' /></button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="mask mask-squircle w-32">
                        <img src={toys_image} alt="toys" />
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
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
                <h4 className='font-bold'>{Quantity}</h4>
            </td>
            <td>
                <h4 className='font-bold'>{Seller}</h4>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default AddedToysList;
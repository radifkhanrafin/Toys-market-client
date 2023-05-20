import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateData = () => {

    const toysData = useLoaderData();
    const navigate=useNavigate()
    console.log(toysData)
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
    } = toysData
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const onSubmit = (data) => {
        console.log(data)

        fetch(`https://toye-data-server.vercel.app/updateJob/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.modifiedCount)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Update this Coffee',
                        'success'
                    )
                    navigate('/mytoys')
                }
            })

    };




    return (
        <div className='flex  flex-col md:flex-row mt-16 bg-gray-300 p-20 rounded-md'>
            <div className='w-1/2'></div>
            <form className='space-y-8 w-1/2'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex flex-col md:flex-row gap-8'>
                    <input
                        className="input input-bordered w-full "
                        {...register("toys_name", { required: true })}
                        placeholder="toy name"
                        defaultValue={toys_name}
                    />
                    <input
                        className="input input-bordered w-full"
                        {...register("sub_category", { required: true })}
                        placeholder="sub category"
                        defaultValue={sub_category}
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-8'>

                    <input
                        className="input input-bordered w-full"
                        {...register("quantity", { required: true })}
                        placeholder="quantity"
                        defaultValue={quantity}
                        type="number"
                    />
                    <input
                        className="input input-bordered w-full"
                        {...register("price", { required: true })}
                        placeholder="price"
                        defaultValue={price}
                        type="number"
                    />

                </div>

                <div className='flex flex-col md:flex-row gap-8'>
                    <input
                        className="input input-bordered w-full "
                        {...register("toys_image")}
                        placeholder="toys image"
                        defaultValue={toys_image}
                    />
                    <input
                        className="input input-bordered w-full"
                        {...register("rating", { required: true })}
                        placeholder="rating"
                        defaultValue={rating}
                        type="number"
                    />
                </div>


                <input
                    className="input input-bordered w-full "
                    {...register("description")}
                    placeholder="description"
                    defaultValue={description}
                />
                <input className="submit-btn btn w-full" value="Update Toys Details" type="submit" />
            </form>
        </div>
    );
};

export default UpdateData;
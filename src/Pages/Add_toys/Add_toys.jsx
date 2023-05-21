import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../AuthProvaider/Provaider';
import Lottie from "lottie-react";
import addAnimation from "../../assets/addAnimation.json";
import { toast } from 'react-toastify';
import usetitle from '../../Component/Dynamic_Title/usetitle';


const Add_toys = () => {
    const { user } = useContext(AuthContext)
    usetitle('Add Toys')

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();



    const onSubmit = (data) => {
        console.log(data)
        fetch('https://b7a11-toy-marketplace-server-side-radifkhanrafin-6yl9.vercel.app/addtoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast('successfully add')
                }
            })
    };



    return (
        <div className='flex  flex-col md:flex-row mt-16 bg-gray-300 p-20 rounded-md'>
            <div className='w-full md:w-1/2'>
                <Lottie animationData={addAnimation}></Lottie>
            </div>
            <form className='space-y-8 w-full md:w-1/2'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex flex-col md:flex-row gap-8'>
                    <input
                        className="input input-bordered w-full "
                        {...register("toys_name", { required: true })}
                        placeholder="toy name"
                    />
                    {/* <input
                        className="input input-bordered w-full"
                        {...register("sub_category", { required: true })}
                        placeholder="sub category"
                    /> */}
                    <select className="input input-bordered w-full" {...register("sub_category")}
                    defaultValue={''}
                    placeholder='toys Category'
                    >
                        <option value="police_car">Police Car</option>
                        <option value="sports_car">Sport Car</option>
                        <option value="track">Track</option>
                        <option value="regular_car">Regular Car</option>
                        <option value="fire_car">Fire Car</option>
                    </select>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>

                    <input
                        className="input input-bordered w-full"
                        {...register("quantity", { required: true })}
                        placeholder="quantity"
                        type="number"
                    />
                    <input
                        className="input input-bordered w-full"
                        {...register("price", { required: true })}
                        placeholder="price"
                        type="number"
                    />

                </div>

                <div className='flex flex-col md:flex-row gap-8'>
                    <input
                        className="input input-bordered w-full "
                        {...register("toys_image")}
                        placeholder="toys image"
                    />
                    <input
                        className="input input-bordered w-full"
                        {...register("rating", { required: true })}
                        placeholder="rating"
                        type="number"
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <input
                        className="input input-bordered w-full"
                        {...register("email", { required: true })}
                        placeholder='Seller Email'
                        value={user?.email}
                    />
                    <input
                        className="input input-bordered w-full"
                        {...register("seller_name", { required: true })}
                        value={user?.displayName}
                        placeholder='Seller name'
                        type="text"
                    />

                </div>

                <input
                    className="input input-bordered w-full "
                    {...register("description")}
                    placeholder="description"
                />
                <input className="submit-btn btn w-full" value="Add toy" type="submit" />
            </form>
        </div>
    );
};

export default Add_toys;
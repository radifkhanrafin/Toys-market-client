import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../AuthProvaider/Provaides';

const Add_toys = () => {
    const { user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();



    const onSubmit = (data) => {

        // fetch("http://localhost:5000/postJob", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then((result) => {
        //         console.log(result);
        //     });
        console.log(data);
    };



    return (
        <div className='flex  flex-col md:flex-row mt-16'>
            <div className='w-1/2'></div>
            <form className='space-y-8 w-1/2'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex flex-col md:flex-row gap-8'>
                    <input
                        className="input input-bordered w-full "
                        {...register("toys_name", { required: true })}
                        placeholder="toy name"
                    />
                    <input
                        className="input input-bordered w-full"
                        {...register("sub_category", { required: true })}
                        placeholder="sub category"
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-8'>

                    <input
                        className="input input-bordered w-full"
                        {...register("Quantity", { required: true })}
                        placeholder="quantity"
                        type="number"
                    />
                    <input
                        className="input input-bordered w-full"
                        {...register("Seller", { required: true })}
                        value={user?.email}
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <input
                        className="input input-bordered w-full "
                        {...register("description")}
                        placeholder="description"
                    />
                </div>
                <input className="submit-btn btn " value="Post Job" type="submit" />
            </form>
        </div>
    );
};

export default Add_toys;
import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
const PhotoGallary = () => {
    const [toys, setToys] = useState([])

    const toysUrl = 'https://b7a11-toy-marketplace-server-side-radifkhanrafin-6yl9.vercel.app/toys'

    useEffect(() => {
        fetch(toysUrl)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [toysUrl]);
    return (
        <div className='my-12 border-4 border-violet-500 rounded-lg shadow-2xl py-4'>
            <div className='mx-4  my-5'>
                <Marquee className=' py-2  rounded bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500'>
                    I used to use business to make money. But I learned that business is a tool. You can use it to support what you believe in. - Poe Bronson
                </Marquee>
            </div>
            <h1 className='text-center text-3xl font-bold my-5'>Photo Gallary</h1>
            <div className='  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center  max-h-[70vh] overflow-y-scroll'>
                {
                    toys.slice(8, 20).map(toy =>
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            key={toy._id}
                        >
                            <figure className=" h-60 w-64 mx-auto overflow-hidden border-8 border-pink-500 rounded-tl-[85px] rounded-br-[85px]  p-5 flex justify-center items-center">
                                <img src={toy.toys_image} alt="Shoes" className="rounded-xl " />
                            </figure>
                        </div>)
                }
            </div>
        </div>
    );
};

export default PhotoGallary;
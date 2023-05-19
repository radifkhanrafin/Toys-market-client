import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const PhotoGallary = () => {
    const [toys, setToys] = useState([])
    const toysUrl = 'http://localhost:5000/toys'
    useEffect(() => {
        fetch(toysUrl)
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);
    console.log(toys)
    return (
        <div className='my-12'>
            <div className='my-8 text-center'>
                <h1>Our Product Gallary</h1>
            </div>
            <div className='  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center  max-h-[70vh] overflow-y-scroll'>
                {
                    toys.map(toy =>
                        <div  data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        >
                            <figure className=" h-60 w-72 overflow-hidden border-8 rounded-tl-[85px] rounded-br-[85px]  p-5 flex justify-center items-center">
                                <img src={toy.toys_image} alt="Shoes" className="rounded-xl " />
                            </figure>
                        </div>)
                }
            </div>
        </div>
    );
};

export default PhotoGallary;
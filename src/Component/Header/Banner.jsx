import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';


const Banner = () => {
    return (
        <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/LdJJtxK/91a-VOFk-XTBL-AC-SL1500.jpg" className="w-full h-[calc(100vh-75px)]" />
                
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">

                    <div className='text-white space-y-7 lg:w-[600px] ml-12'>
                        {/* <h1 className='text-6xl font-extrabold'>Affordable Price For Track Servicing</h1> */}
                        <p className='capitalize'>it is our responsibility to be friendly with customers and help them</p>
                        <button className='btn btn-warning mr-5'> Discover More</button>
                        <button className='btn btn-outline btn-secondary'> Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className=" btn btn-outline btn-primary"> <FaAngleDoubleLeft /> </a>
                    <a href="#slide2" className=" btn btn-outline btn-primary"><FaAngleDoubleRight /> </a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/NpWbfCD/51-IQb-Gk-YWm-L.jpg" className="w-full h-[calc(100vh-75px)]" />
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                    <div className='text-white space-y-7 lg:w-[600px] ml-12'>
                        {/* <h1 className='text-6xl font-extrabold'>Affordable Price For Bus Servicing</h1> */}
                        <p className='capitalize'>it is our responsibility to be friendly with customers and help them</p>
                        <button className='btn btn-warning mr-5'> Discover More</button>
                        <button className='btn btn-outline btn-secondary'> Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft/></a>
                    <a href="#slide3" className=" btn btn-outline btn-primary"><FaAngleDoubleRight/></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Hhtcg4T/images.jpg" className="w-full h-[calc(100vh-75px)]" />
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                    <div className='text-white space-y-7 lg:w-[600px] ml-12'>
                        {/* <h1 className='text-6xl font-extrabold'>Affordable Price For Car Servicing</h1> */}
                        <p className='capitalize'>it is our responsibility to be friendly with customers and help them</p>
                        <button className='btn btn-warning mr-5'> Discover More</button>
                        <button className='btn btn-outline btn-secondary'> Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft/></a>
                    <a href="#slide4" className=" btn btn-outline btn-primary"><FaAngleDoubleRight/></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/ggXvDRT/jeong-pei-Dzq-C1-R1-GX1-E-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                    <div className='text-white space-y-7 lg:w-[600px] ml-12'>
                        {/* <h1 className='text-6xl font-extrabold'>Affordable Price For Sports  Car Servicing</h1> */}
                        <p className='capitalize'>it is our responsibility to be friendly with customers and help them</p>
                        <button className='btn btn-warning mr-5'> Discover More</button>
                        <button className='btn btn-outline btn-secondary'> Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft/></a>
                    <a href="#slide5" className=" btn btn-outline btn-primary"><FaAngleDoubleRight/></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/L5VNb4R/images-6.jpg" className="w-full h-[calc(100vh-75px)]" />
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                    <div className='text-white space-y-7 lg:w-[600px] ml-12'>
                        {/* <h1 className='text-6xl font-extrabold'>Affordable Price For fire  Car Servicing</h1> */}
                        <p className='capitalize'>it is our responsibility to be friendly with customers and help them</p>
                        <button className='btn btn-warning mr-5'> Discover More</button>
                        <button className='btn btn-outline btn-secondary'> Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft/></a>
                    <a href="#slide6" className=" btn btn-outline btn-primary"><FaAngleDoubleRight/></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Wv5ccjP/Police-Car-toy.webp" className="w-full h-[calc(100vh-75px)]" />
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                    <div className='text-white space-y-7 lg:w-[600px] ml-12'>
                        {/* <h1 className='text-6xl font-extrabold'>Affordable Price For police  Car Servicing</h1> */}
                        <p className='capitalize'>it is our responsibility to be friendly with customers and help them</p>
                        <button className='btn btn-warning mr-5'> Discover More</button>
                        <button className='btn btn-outline btn-secondary'> Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft/></a>
                    <a href="#slide1" className=" btn btn-outline btn-primary"><FaAngleDoubleRight/></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
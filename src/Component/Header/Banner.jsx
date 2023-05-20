import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';






const Banner = () => {
    return (
        <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/vZ1Q1ZR/rhys-moult-7ea-FIKeo1-MQ-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
                
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
                <img src="https://i.ibb.co/58KWxJT/kevin-bhagat-3c-Lpiv8h5so-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
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
                <img src="https://i.ibb.co/zZ3fdjW/steinar-engeland-drw6-Rt-OKDi-A-unsplash-1.jpg" className="w-full h-[calc(100vh-75px)]" />
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
                <img src="https://i.ibb.co/k1pkjVf/haidan-t-Er-DQw972-Y-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
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
                <img src="https://i.ibb.co/VMp1c2f/lance-asper-N9-Pf2-J656a-Q-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
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
                <img src="https://i.ibb.co/xJfVZVY/gabriel-vasiliu-s-N2p-8n-OLp-E-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
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
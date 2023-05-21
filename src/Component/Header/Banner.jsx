import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';






const Banner = () => {
    return (
        <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/vZ1Q1ZR/rhys-moult-7ea-FIKeo1-MQ-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
                
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">

                    <div className='text-white space-y-7 lg:w-[600px] ml-12'>
                        <h1 className='text-6xl font-extrabold'> Fast and Furious!</h1>
                        <p className='capitalize'>Race into action with our high-speed toy cars that will leave you breathless. From sleek sports cars to rugged off-roaders, we have them all!</p>
                        
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
                        <h1 className='text-6xl font-extrabold'>Collectible Classics!</h1>
                        <p className='capitalize'>Discover timeless classics and iconic models that car enthusiasts will love. Build your dream collection with our range of vintage and collectible cars.</p>
                        
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
                        <h1 className='text-6xl font-extrabold'> Mighty Machines!</h1>
                        <p className='capitalize'>Get behind the wheel of powerful construction vehicles and heavy-duty trucks. Let your imagination soar as you build and conquer the toughest jobs!</p>
                        
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
                        <h1 className='text-6xl font-extrabold'>ake to the Skies!</h1>
                        <p className='capitalize'>Explore the world of aviation with our fantastic selection of toy planes and helicopters. Let your imagination soar high above the clouds!</p>
                        
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
                        <h1 className='text-6xl font-extrabold'>Racing Champions!</h1>
                        <p className='capitalize'>Embrace the competitive spirit with our range of race sets, tracks, and accessories. Challenge your friends and family to thrilling races and see who takes the checkered flag!</p>
                        
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
                        <h1 className='text-6xl font-extrabold'> Hauling Heroes!</h1>
                        <p className='capitalize'>Become a hero of the road with our selection of toy trucks and transporters. Haul goods, deliver cargo, and embark on exciting adventures!</p>
                        
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
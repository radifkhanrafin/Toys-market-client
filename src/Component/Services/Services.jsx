import React from 'react';
import { FaAlignCenter, FaAt, FaBatteryHalf, FaBeer, FaCarAlt, FaCarBattery, FaExchangeAlt, FaHeadset, FaTools, FaUserCheck } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='my-12 rounded-lg p-8 shadow-lg '>
            <h3 className="text-center text-6xl mb-6 font-bold text-transparent bg-clip-text  bg-gradient-to-r from-blue-400 via-violet-600 to-blue-500 ">
                Our <span>services</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="gradient-bg">
                    <div className='flex justify-center items-center'>
                        <FaCarAlt className='text-4xl text-black ' />
                    </div>
                    
                    <h3>Toys car selling</h3>
                    <p className='h-24'>
                        If you're considering upgrading your mining vehicle fleet or have
                        vehicles that you no longer require, we offer a convenient and
                        hassle-free car selling service.
                    </p>
                    <button href="#" className="w-24 p-1 rounded-md bg-stone-500 hover:bg-stone-800 hover:text-white">
                        read more
                    </button>
                </div>
                <div className="gradient-bg">
                    <div className='flex justify-center items-center'>
                       <FaTools className='text-4xl text-black' /> 
                    </div>
                    
                    <h3>parts repair</h3>
                    <p className='h-24'>
                        In the event of component failures or damage to specific parts of
                        your mining vehicles, our skilled technicians are experienced in
                        parts repair.
                    </p>
                    <button href="#" className="w-24 p-1 rounded-md bg-stone-500 hover:bg-stone-800 hover:text-white">
                        read more
                    </button>
                </div>
                <div className="gradient-bg">
                    <div className='flex justify-center items-center'>
                         <FaUserCheck className='text-4xl text-black' />
                         </div>
                   
                    <h3>car insurance</h3>
                    <p className='h-24'>
                        Protecting your mining vehicles and investments is crucial. At Spot
                        Mining Car, we offer comprehensive car insurance services tailored
                        to the mining industry.
                    </p>
                    <button href="#" className="w-24 p-1 rounded-md bg-stone-500 hover:bg-stone-800 hover:text-white">
                        read more
                    </button>
                </div>
                <div className="gradient-bg">
                    <div className='flex justify-center items-center'>
                       <FaCarBattery className='text-4xl text-black' /> 
                    </div>
                    
                    <h3>battery replace</h3>
                    <p className='h-24'>
                        Mining vehicles rely heavily on powerful batteries to operate
                        efficiently. If you're experiencing battery issues or need a battery
                        replacement, we have you covered.
                    </p>
                    <button href="#" className="w-24 p-1 rounded-md bg-stone-500 hover:bg-stone-800 hover:text-white">
                        read more
                    </button>
                </div>
                <div className="gradient-bg">
                   
                    <div  className='flex justify-center items-center'>
                         <FaExchangeAlt className='text-4xl text-black' />
                    </div>
                    <h3>Toy Exchange</h3>
                    <p className='h-24'>
                        Proper maintenance and regular oil changes are vital for the smooth
                        operation and longevity of your mining vehicles.
                    </p>
                    <button href="#" className="w-24 p-1 rounded-md bg-stone-500 hover:bg-stone-800 hover:text-white">
                        read more
                    </button>
                </div>
                <div className="gradient-bg">
                    <div className='flex justify-center items-center'>
                        <FaHeadset className='text-4xl  text-black' />
                    </div>
                    <h3>24/7 support</h3>
                    <p className='h-24'>
                        We understand that mining operations don't adhere to a fixed
                        schedule, and emergencies can happen at any time.
                    </p>
                    <button href="#" className="w-24 p-1 rounded-md bg-stone-500 hover:bg-stone-800 hover:text-white">
                        read more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
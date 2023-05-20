import React from 'react';
import { FaBatteryHalf, FaBeer, FaCarAlt, FaCarBattery, FaExchangeAlt, FaHeadset, FaTools } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='my-12'>
                <h3 className="text-center">
                    our <span>services</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="shadow-2xl p-3">
                        <FaCarAlt />
                        <h3>Toys car selling</h3>
                        <p>
                            If you're considering upgrading your mining vehicle fleet or have
                            vehicles that you no longer require, we offer a convenient and
                            hassle-free car selling service.
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                    <div className="shadow-2xl p-3">
                        <FaTools />
                        <h3>parts repair</h3>

                        <p>
                            In the event of component failures or damage to specific parts of
                            your mining vehicles, our skilled technicians are experienced in
                            parts repair.
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                    <div className="shadow-2xl p-3">
                        <i className="fas fa-car-crash" />
                        <h3>car insurance</h3>
                        <p>
                            Protecting your mining vehicles and investments is crucial. At Spot
                            Mining Car, we offer comprehensive car insurance services tailored
                            to the mining industry.
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                    <div className="shadow-2xl p-3">
                        <FaCarBattery/>
                        <h3>battery replace</h3>
                        <p>
                            Mining vehicles rely heavily on powerful batteries to operate
                            efficiently. If you're experiencing battery issues or need a battery
                            replacement, we have you covered.
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                    <div className="shadow-2xl p-3">
                        <FaExchangeAlt />
                        <h3>Toy Replace</h3>
                        <p>
                            Proper maintenance and regular oil changes are vital for the smooth
                            operation and longevity of your mining vehicles.
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                    <div className="shadow-2xl p-3">
                        <FaHeadset/>
                        <h3>24/7 support</h3>
                        <p>
                            We understand that mining operations don't adhere to a fixed
                            schedule, and emergencies can happen at any time.
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                </div>
        </div>
    );
};

export default Services;
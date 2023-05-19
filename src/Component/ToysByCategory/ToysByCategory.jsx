import React, { useEffect, useState } from 'react';

const ToysByCategory = () => {
    const [activeTab, setActiveTab] = useState("sports_car");
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    // useEffect(() => {
    //     fetch(`http://localhost:5000/allJobsByCategory/${activeTab}`)
    //         .then((res) => res.json())
    //         .then((result) => {
    //             setJob(result);
    //         });
    // }, [activeTab]);
    console.log(activeTab)
    return (
        <div className='mt-12 '>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-12 gap-10 md:gap-2">
                {/* sports_car */}
                <button
                    onClick={() => handleTabClick("sports_car")}
                    className={`border-4 font-bold border-red-800 rounded-md w-40 py-1 mr-4  ${activeTab == "sports_car" ? " bg-red-700 text-white" : ""
                        }`}
                >
                    Sports Cars
                </button>

                {/* track */}
                <button
                    onClick={() => handleTabClick("track")}
                    className={`border-4 font-bold border-red-800 rounded-md w-40 py-1  mr-4 ${activeTab == "track" ? " bg-red-700 text-white" : ""
                        }`}
                >
                    Truck
                </button>

                <button
                    onClick={() => handleTabClick("regular_car")}
                    className={`border-4 font-bold border-red-800 rounded-md w-40 py-1 mr-4 ${activeTab == "regular_car" ? " bg-red-700 text-white" : ""
                        }`}
                >
                    Regular Cars
                </button>
                <button
                    onClick={() => handleTabClick("fire_car")}
                    className={`border-4 font-bold border-red-800 rounded-md w-40 py-1 mr-4 ${activeTab == "fire_car" ? " bg-red-700 text-white" : ""
                        }`}
                >
                    Fire Cars
                </button>
                <button
                    onClick={() => handleTabClick("police_car")}
                    className={` border-4 font-bold border-red-800 rounded-md w-40 py-1 mr-4 ${activeTab == "police_car" ? " bg-red-700 text-white" : ""
                        }`}
                >
                    Police Cars
                </button>

            </div>
        </div>
    );
};

export default ToysByCategory;
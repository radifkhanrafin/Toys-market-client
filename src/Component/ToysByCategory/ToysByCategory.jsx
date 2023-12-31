import React, { useEffect, useState } from 'react';
import Toys_card from '../Toys_Card/Toys_card';

const ToysByCategory = () => {
    const [activeTab, setActiveTab] = useState("");
    const [selectCategory, setSelectcategory] = useState([]);
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-radifkhanrafin-6yl9.vercel.app/toyByCategory/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setSelectcategory(result);
            });
    }, [activeTab]);
    return (
        <div className='my-12  '> 
        
       
            <div className='bg-gradient-to-r from-[#1F1C2C]  to-[#61045F]  p-3 mb-10 rounded-2xl'>
                <h2 className='text-5xl my-8 font-bold text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#626be7] via-[#BC36FF]  to-[#FF2E66]'>You can search Toys By Using this <br /> Sub-Categoy
                </h2>
                <p className='text-center  text-transparent bg-clip-text  bg-gradient-to-r from-blue-400 via-violet-600 to-blue-500'>Click the category button and show the product</p>
            </div>
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    selectCategory.map(toy => <Toys_card
                        key={toy._id}
                        toy={toy}
                    ></Toys_card>)
                }
            </div>

        </div>
    );
};

export default ToysByCategory;
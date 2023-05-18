import React, { useEffect, useState } from 'react';
import AddedToysList from '../../Component/AddedToysLIst/AddedToysList';

const My_toys = () => {

    const [addedtoys , setAddedtoys]=useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/mytoys')
            .then(res => res.json())
            .then(data => setAddedtoys(data))
    }, []);
    console.log(addedtoys)

    return (
        <div>
            <div className="overflow-x-auto w-full mt-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Toys</th>
                            <th>Toys Name</th>
                            <th>Toys Category</th>
                            <th>Quantity</th>
                            <th>Seller Email</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            addedtoys.map(toy=><AddedToysList
                            toy={toy}
                            key={toy._id}
                            ></AddedToysList>)
                        }
                       
                      

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default My_toys;
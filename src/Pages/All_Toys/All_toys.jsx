import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import AllToysTbl from '../../Component/AllToysTable/AllToysTbl';

const All_toys = () => {


    const [alltoys , setAlltoys]=useState([])

    const allToysUrl='http://localhost:5000/toys'
    useEffect(() => {
      fetch(allToysUrl)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setAlltoys(data)
    })
    }, [allToysUrl]);
    console.log(alltoys.length)
    return (
       <div>
        <h1>toys Length : {alltoys.length}</h1>
        <div className="overflow-x-auto w-full mt-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toys Name</th>
                            <th>Toys Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            alltoys.map(toy => <AllToysTbl
                                toy={toy}
                                key={toy._id}
                            ></AllToysTbl>)
                        }



                    </tbody>

                </table>
            </div>
       </div>
    );
};

export default All_toys;
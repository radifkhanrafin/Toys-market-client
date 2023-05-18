import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Toys_card from '../../Component/Toys_Card/Toys_card';

const All_toys = () => {


    const [alltoys , setAlltoys]=useState([])

    const allToys='http://localhost:5000/toys'
    useEffect(() => {
      fetch(allToys)
      .then(res=>res.json())
      .then(data=>setAlltoys(data))
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
            {
                alltoys.map(toy=><Toys_card
                key={toy._id}
                toy={toy}
                ></Toys_card>)
            }
        </div>
    );
};

export default All_toys;
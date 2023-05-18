import { data } from 'autoprefixer';
import React, { useEffect } from 'react';

const All_toys = () => {
    const allToys='http://localhost:5000/toys'
    useEffect(() => {
      fetch(allToys)
      .then(res=>res.json())
      .then(data=>console.log(data))
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default All_toys;
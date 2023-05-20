import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import AllToysTbl from '../../Component/AllToysTable/AllToysTbl';

const All_toys = () => {


    const [alltoys, setAlltoys] = useState([])
    const [searchToy, setSearchToy] = useState("");
    const [searchResult, setSearchresult] = useState(true)

    const allToysUrl = 'http://localhost:5000/toys'

    useEffect(() => {
        fetch(allToysUrl)
            .then(res => res.json())
            .then(data => {
                setAlltoys(data)
                console.log(data)
                if (data.length == 0) {
                    setSearchresult(false)
                }
            })
    }, [allToysUrl]);
    // console.log(alltoys.length)

    const handleSearch = () => {
        fetch(`http://localhost:5000/toysBySearch/${searchToy}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setAlltoys(data);
                if (data.length === 0) {
                    setSearchresult(false)
                } else {
                    setSearchresult(true)
                }

            });
    };
    console.log(searchResult)
    return (
        <div>
            <h1>toys Length : {alltoys.length}</h1>
            <div className="search-box p-2 text-center">
                <input
                    onChange={(e) => setSearchToy(e.target.value)}
                    type="text"
                    className="py-1 px-4 text-center border-2 rounded-md border-primary w-72"
                    placeholder='Search by name or sub Category '
                />{" "}
                <button className='w-24  border-2 rounded-md border-primary py-1' onClick={handleSearch}>Search</button>
            </div>
            <div className="overflow-x-auto w-full mt-16">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Toys Name</th>
                            <th>Toys Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Seller</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            searchResult ? <>
                            {
                                alltoys.map(toy => <AllToysTbl
                                    toy={toy}
                                    key={toy._id}
                                ></AllToysTbl>)
                            } </>: 'no data'
                           }



                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default All_toys;
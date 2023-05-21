import React, { useEffect, useState } from 'react';
import AddedToysList from '../../Component/AddedToysLIst/AddedToysList';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvaider/Provaider';
import usetitle from '../../Component/Dynamic_Title/usetitle';

const My_toys = () => {
    usetitle('My Toys')
    const { user } = useContext(AuthContext)
    // console.log(user?.email)
    const [addedtoys, setAddedtoys] = useState([]);

    const url = `https://b7a11-toy-marketplace-server-side-radifkhanrafin-6yl9.vercel.app/mytoys?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddedtoys(data))
    }, [url]);


    // console.log(addedtoys)
    const deleteItems = (_id) => {
        console.log('delete')
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`https://b7a11-toy-marketplace-server-side-radifkhanrafin-6yl9.vercel.app/mytoys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            console.log(_id)
                            const remainingToys = addedtoys.filter(toy => toy._id !== _id);
                            setAddedtoys(remainingToys)
                        }
                    })


            }
        })
    }

    return (
        <div>
            <h3>my toys : {addedtoys.length}</h3>
            <div className="overflow-x-auto w-full mt-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Delete / Update</th>
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
                            addedtoys.map(toy => <AddedToysList
                                toy={toy}
                                key={toy._id}
                                deleteItems={deleteItems}
                            ></AddedToysList>)
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default My_toys;
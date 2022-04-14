import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageProduct.css'
const ManageProduct = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://blooming-garden-01472.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    // delete car 
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `https://blooming-garden-01472.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted succesfully')
                        const remaining = cars.filter(car => car._id !== id);
                        setCars(remaining);
                    }

                })
        }
    }

    return (
        <>

            <div>
                <h3 style={{ color: 'white' }}>Manage all Products</h3>
                {
                    cars.map(car => <div className='edit my-2 ' key={car._id}>

                        <div>
                            {car.name}
                        </div>
                        <div>
                            {car.price}
                        </div>

                        <div>
                            <Button onClick={() => handleDelete(car._id)} variant="text">Delete</Button>
                        </div>
                        <div>
                            Update
                        </div>




                        {/*< div className='col' > <h3 style={{ marginLeft: '30px', textAlign: 'left' }}>{car.course}</h3></div>
                        <div className='col ' style={{ alignItems: 'center' }} >
                            <Button onClick={() => handleDelete(car._id)} variant="contained">Delete</Button>
                        </div> */}
                    </div>)
                }
            </div>

        </>
    );
};

export default ManageProduct;
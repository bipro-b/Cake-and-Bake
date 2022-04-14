import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://blooming-garden-01472.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfullt');
                    reset();
                }
            })
    }
    return (
        <>

            <div className="add-car">
                <h3 style={{ color: 'white' }}>Add new Course</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("course", { required: true, maxLength: 20 })} placeholder="Course name" />

                    <textarea {...register("category")} placeholder="Category" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register('thumb')} placeholder="upload image" />
                    <input type="submit" />
                </form>

            </div>

        </>
    );
};

export default AddProduct;
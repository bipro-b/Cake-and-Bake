
import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { bookId } = useParams();
    const [details, setDetails] = useState([]);
    const [bookDetails, setBookDetails] = useState({});

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    useEffect(() => {
        const choosedBook = details.find(
            serv => serv._id === bookId
        );
        setBookDetails(choosedBook);
    }, [details, bookId])


    const onSubmit = data => {

        axios.post('https://fierce-escarpment-93712.herokuapp.com/enroll', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <>
            <NavBar />
            <div className='row take'>
                <Col col-md-12 col-lg-6>
                    <Grid sx={{ alignItems: 'center', marginBottom: '20px' }}>
                        <Typography>
                            <img src={user.photoURL} alt="" />
                            <h2 style={{ color: 'white' }}>Hey "{user?.displayName}" Welcome</h2>
                        </Typography>
                        <Typography sx={{ mx: 'auto' }}>
                            <img style={{ width: '50%' }} src={bookDetails?.img} alt="" />

                        </Typography>
                        <Typography style={{ margin: '0 50px 0 50px', alignItems: 'center', color: 'white', fontSize: '30px' }}>
                            {bookDetails?.name} <br />

                        </Typography>
                    </Grid>
                </Col>
                <Col col-md-12 col-lg-6>
                    <div className="">
                        <h3 style={{ color: 'white' }}>Fill the purchase form</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className='point'>
                            <input defaultValue={bookDetails?.name} {...register("name", { required: true })} />
                            <input defaultValue={bookDetails?.price} {...register("description", { required: true })} />
                            <input defaultValue={user?.displayName} {...register("displayName", { required: true, maxLength: 20 })} />
                            <input defaultValue={user?.email} {...register("email", { required: true, maxLength: 50 })} />


                            <input type="address" {...register("address")} placeholder="address" />
                            <input type="address" {...register("city")} placeholder="city" />
                            <input type="number" {...register("phone")} placeholder="your phone number" />
                            <input type="submit" />
                        </form>

                    </div>
                </Col>
            </div>
            <Footer />
        </>
    );
};

export default Shipping;
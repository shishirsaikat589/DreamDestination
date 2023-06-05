import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Order.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Order = () => {
    const [loggedInUser] = useContext(UserContext);
    const { title, price } = useParams()
    const logoStyle = {
        width: '200px',
        height: '100px'
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        data.email = `${loggedInUser.email}`;
        data.Design = { title };
        data.status = 'pending';
        fetch('https://fathomless-everglades-19778.herokuapp.com/NewOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('your order place successful')
                    document.location = '/payment';
                }
            })
    };

    return (

        <div style={{ background: '#FFFFFF' }}>

            <div className='container'>
                <div style={{ padding: '20px 0' }} className="Topbar d-flex">
                    <div style={{ width: '20%' }} className="top">
                        <Link to='/home'><img style={logoStyle} src={logo} alt="" /></Link>
                    </div>
                    <div style={{ width: '80%' }} className="userData d-flex justify-content-between">
                        <h5 style={{ marginTop: '15px' }}>Order</h5>
                        <img style={{ borderRadius: '50px', height: '30px' }} src={loggedInUser.photoURL} alt="" />


                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className="col-md-9">
                    <div className="orderSubmit">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <input name="name" value={loggedInUser.name || ''} style={{ width: '570px', padding: '20px 10px' }} placeholder='Your name / company’s name' className='form-control form_input' ref={register({ required: true })} /> <br />
                            <input name="email" value={loggedInUser.email || ''} style={{ width: '570px', padding: '20px 10px' }} placeholder='Your email address' className='form-control form_input' ref={register({ required: true })} disabled /> <br />
                            <input name="Design" value={title} style={{ width: '570px', padding: '20px 10px' }} placeholder='' className='form-control form_input' ref={register({ required: true })} disabled /> <br />
                            <h6>Your selected place  will be charged ${price}</h6>
                            <input type="submit" value='SEND' style={{ width: '150px', height: '40px', fontSize: '16px', background: '#111430', color: '#FFFFFF', borderRadius: '10px', marginTop: '20px' }} />
                        </form>
                    </div>

                </div>

            </div >

        </div>
    );
};

export default Order;
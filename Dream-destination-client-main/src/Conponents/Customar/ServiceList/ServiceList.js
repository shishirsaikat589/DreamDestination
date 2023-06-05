import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import ServiceCard from '../ServiceCard/ServiceCard';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {

    const [loggedInUser] = useContext(UserContext);
    const logoStyle = {
        width: '200px',
        height: '100px'
    }
    const [orderService, setOrderService] = useState([])

    useEffect(() => {
        fetch("https://fathomless-everglades-19778.herokuapp.com/review?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrderService(data)
            })
    }, [])

    console.log(orderService.map(service => (service.Design.title)))
    return (
        <div style={{ background: '#FFFFFF' }}>
            <div className='container'>
                <div style={{ padding: '20px 0' }} className="Topbar d-flex">
                    <div style={{ width: '20%' }} className="top">
                        <Link to='/home'><img style={logoStyle} src={logo} alt="" /></Link>
                    </div>
                    <div style={{ width: '80%' }} className="userData d-flex justify-content-between">
                        <h5 style={{ marginTop: '15px' }}>Booking list</h5>
                        <h5 style={{ marginTop: '15px' }}>
                                                    <img style={{borderRadius: '50px', height: '30px'}} src={loggedInUser.photoURL} alt="" />

                        </h5>
                    </div>

                </div>
                <h3 style={{ color: '#0d6a9e' }} > {loggedInUser.name}, You have {orderService.length} Booking</h3>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className="col-md-9">
                    <div className="orderSubmit">
                        <div className="row">
                            {

                                orderService.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ServiceList;
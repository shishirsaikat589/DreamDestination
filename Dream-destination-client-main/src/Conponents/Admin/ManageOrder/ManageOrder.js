import React, { useContext, useEffect, useState } from 'react';
import OrderManage from './OrderManage';
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
const ManageOrder = () => {
    const [loggedInUser] = useContext(UserContext);
    const logoStyle = {
        width: '200px',
        height: '100px'
    }
    const [ManageOrder, SetmanageOrder] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-everglades-19778.herokuapp.com/getCustomerOrder')
            .then(res => res.json())
            .then(data => {
                SetmanageOrder(data)
            })
    }, [])
    return (
        <>
            <div style={{ background: '#FFFFFF' }}>
                <div className='container'>
                    <div style={{ padding: '20px 0' }} className="Topbar d-flex">
                        <div style={{ width: '20%' }} className="top">
                            <Link to='/home'><img style={logoStyle} src={logo} alt="" /></Link>
                        </div>
                        <div style={{ width: '80%' }} className="userData d-flex justify-content-between">
                            <h5 style={{ marginTop: '15px' }}>Edit Your Bookings</h5>
                            <h5 style={{ marginTop: '15px' }}>
                                <img style={{ borderRadius: '50px', height: '30px' }} src={loggedInUser.photoURL} alt="" />


                            </h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <div className="container-fluid p-0">
                            <div className="row h-100 g-0">
                                <div className="col-md-12">
                                    <div className="px-5">
                                        <table class="table table-striped table-inverse table-responsive">
                                            <thead className="thead-inverse">
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Booked Name</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ManageOrder.map(pd => <OrderManage key={pd._id} books={pd}></OrderManage>)}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageOrder;
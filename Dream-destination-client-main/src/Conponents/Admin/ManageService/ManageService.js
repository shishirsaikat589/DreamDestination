import React, { useContext, useEffect, useState } from 'react';
import ServiceManage from './ServiceManage';
import { Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [ManageService, setManageService] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://fathomless-everglades-19778.herokuapp.com/getService')
            .then(res => res.json())
            .then(data => {
                setManageService(data)
                setSpinner(false)
            })
    }, [])

    const logoStyle = {
        width: '150px',
    }
    const tableStyle = {
        width: '950px',
        background: '#ffffff',
        borderRadius: '15px',
        padding: '20px'
    }


    return (

        <div style={{ background: '#FFFFFF' }}>
            <div className='container'>
                <div style={{ padding: '20px 0' }} className="Topbar d-flex">
                    <div style={{ width: '20%' }} className="top">
                        <Link to='/home'><img style={logoStyle} src={logo} alt="" /></Link>
                    </div>
                    <div style={{ width: '80%' }} className="userData d-flex justify-content-between">
                        <h5 style={{ marginTop: '15px' }}>Edit Your PLACES</h5>
                                                <img style={{borderRadius: '50px', height: '30px'}} src={loggedInUser.photoURL} alt="" />


                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-9">
                    <div className="orderSubmit">
                        <Table style={tableStyle}>
                            <thead style={{ background: '#F5F6FA', margin: '10px 15px', borderRadius: '30px' }}>
                                <tr>
                                    <th style={{ width: '1px' }}>Title</th>
                                </tr>

                            </thead>
                            <tbody>
                                {ManageService.map(service => <ServiceManage service={service}></ServiceManage>)}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div >
            <div>

            </div>
        </div>
    );
};

export default ManageService;
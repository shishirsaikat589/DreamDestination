import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const MAkeAdmin = () => {
    const [loggedInUser] = useContext(UserContext);
    const logoStyle = {
        width: '200px',
        height: '100px'
    }


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://fathomless-everglades-19778.herokuapp.com/addEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert(' Your given Email address successfully added AS ADMIN ')
                }
            })

    }

    const addServices = {
        width: '900px',
        height: '300px',
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
                        <h5 style={{ marginTop: '15px' }}>Make Admin</h5>
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
                        <form onSubmit={handleSubmit(onSubmit)} style={addServices} >
                            <label>Email</label>
                            <div className='d-flex '>
                                <input name="email" style={{ width: '400px', padding: '20px 10px' }} placeholder='Enter Your Email' className='form-control' ref={register({ required: true })} />
                                <input type="submit" value='SEND' style={{ width: '150px', height: '40px', fontSize: '16px', background: '#009444', color: '#FFFFFF', borderRadius: '10px', marginLeft: '20px' }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default MAkeAdmin;
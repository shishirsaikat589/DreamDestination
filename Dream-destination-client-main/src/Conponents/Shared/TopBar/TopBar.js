import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './TopBar.css';
import Logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

const TopBar = () => {
    const [loggedInUser ] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        fetch('https://fathomless-everglades-19778.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <Navbar expand="lg">
            <div className='container
            '>
                <Navbar.Brand style={{float:'left'}}> 
                    <img style={{width:'250px', height:'100px'}} src={Logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{width:'900px',float:'right'}} id="basic-navbar-nav">
                    <Nav  className="ml-auto">
                        <li className="menu_li">
                            <NavLink activeClassName='text-info'
                                to='/home' className='nav_li'> <button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#18CC45' ,color:'#FFFFFF'}}  className='btn mt-2'> Home </button></NavLink>
                        </li>
                        <li className="menu_li">
                            <NavLink activeClassName='text-primary'
                                to='/serviceList' className='nav_li'> <button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#18CC45' ,color:'#FFFFFF'}}  className='btn mt-2'>Your Bookings</button></NavLink>
                        </li>
                       {isAdmin && <div>
                        <li className="menu_li">
                            <NavLink activeClassName='text-primary'
                                to='/admin' className='nav_li'><button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#18CC45' ,color:'#FFFFFF'}}  className='btn mt-2'>Admin</button></NavLink>
                        </li>
                        </div>}
                        <li className="menu_li">
                            <NavLink activeClassName='text-primary'
                                to='/contact' className='nav_li'> <button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#18CC45' ,color:'#FFFFFF'}}  className='btn mt-2'>Contact Us</button></NavLink>
                        </li>
                       
                        <li>
                            <NavLink to='/login'> 
                            <button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#18CC45' ,color:'#FFFFFF'}}  className='btn mt-2'>
                                 {
                                    loggedInUser.email ? loggedInUser.name : 'Login'
                                }
                                
                            </button> 
                            </NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default TopBar;
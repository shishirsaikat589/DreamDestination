import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import Sidebar from '../Sidebar/Sidebar';



const User = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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


    const [orderList , setOrderList] = useState([])
    useEffect(()=>{
        fetch("https://fathomless-everglades-19778.herokuapp.com/getCustomerOrder")
        .then(res => res.json())
        .then(data => {
            setOrderList(data)
        })
    }, [])


        const logoStyle = {
            width : '150px',
        }
        const tableStyle = {
            width : '950px',
            background : '#ffffff',
            borderRadius : '15px' ,
            padding :'20px'
        }
    return (
        <div style={{background: '#FFFFFF'}}>
        <div className='container'>
            <div style={{padding: '20px 0'}} className="Topbar d-flex">
                <div style={{width: '20%'}} className="top">
                   <Link to='/home'><img style={logoStyle} src={logo} alt=""/></Link>   
                </div>
                <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                    <h5 style={{marginTop: '15px'}}>Admin</h5>
                    <h5 style={{marginTop: '15px'}}>
                                                <img style={{borderRadius: '50px', height: '30px'}} src={loggedInUser.photoURL} alt="" />

                    </h5>
                </div>
            
            </div> 
        </div>
        
        {isAdmin  &&  <div className="row">
               <div className="col-md-3">
                <Sidebar></Sidebar>
                </div>
                
                <div className="col-md-9">
              
                    <AdminServiceList></AdminServiceList>
                </div>
            </div >}
            <div>
                
            </div>
        </div>
    );
};

export default User;
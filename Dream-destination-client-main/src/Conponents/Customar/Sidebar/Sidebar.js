import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser ] = useContext(UserContext);
    return (
        <div className="orderList" >
            <NavLink style={{backgroundColor:"#1C31E9",padding:"10px",borderRadius:"5px"}} className="orderLi" activeClassName='text-primary' to="/order">
               Booking
            </NavLink>
            <NavLink  style={{backgroundColor:"#064FF6",padding:"10px",borderRadius:"5px"}} className="orderLi" activeClassName='text-primary' to="/serviceList">
               Booking list
            </NavLink>
            <NavLink  style={{backgroundColor:"#053195",padding:"10px",borderRadius:"5px"}} className="orderLi" activeClassName='text-primary' to="/review">
                Review
            </NavLink>

         </div>
    );
};

export default Sidebar;
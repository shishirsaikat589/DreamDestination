import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="orderList"  >
        <NavLink style={{backgroundColor:"#5986ED",padding:"10px",borderRadius:"5px"}} className="orderLi" activeClassName='text-primary' to="/adminService">
        Booking list
        </NavLink>
        <NavLink style={{backgroundColor:"#0C4FE9",padding:"10px",borderRadius:"5px"}} className="orderLi" activeClassName='text-primary' to="/addService">
        Add New Place
        </NavLink>
        <NavLink style={{backgroundColor:"#4F44EA",padding:"10px",borderRadius:"5px"}} className="orderLi" activeClassName='text-primary' to="/makeAdmin">
        Make Admin
        </NavLink>
        <NavLink style={{backgroundColor:"#0820F9",padding:"10px",borderRadius:"5px"}} className="orderLi" activeClassName='text-primary' to="/manageservice">
        Manage Place
        </NavLink>
        <NavLink style={{backgroundColor:"#1C31E9",padding:"10px",borderRadius:"5px"}} className="orderLi" activeClassName='text-primary' to="/manageorder">
        Manage Booking
        </NavLink>
    </div>

    );
};

export default Sidebar;
import React, { createContext, useState } from 'react';
import Home from './Conponents/Home/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Conponents/Login/Login';
import Order from './Conponents/Customar/Order/Order';
import ServiceList from './Conponents/Customar/ServiceList/ServiceList';
import Review from './Conponents/Customar/Review/Review';
import User from './Conponents/Admin/User/User';
import AddService from './Conponents/Admin/AddService/AddService';
import MAkeAdmin from './Conponents/Admin/MakeAdmin/MAkeAdmin';
import ServiceCard from './Conponents/Customar/ServiceCard/ServiceCard';
import PrivateRoute from './Conponents/Login/PrivateRoute';
import NotFound from './Conponents/NotFound/NotFound';
import ManageService from './Conponents/Admin/ManageService/ManageService';
import ManageOrder from './Conponents/Admin/ManageOrder/ManageOrder';
import AdminServiceList from './Conponents/Admin/AdminServiceList/AdminServiceList';
import Footer from './Conponents/Shared/Footer/Footer';
import ProcessPayment from './Conponents/Customar/ProcessPayment/ProcessPayment';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
              <Route exact path='/'>
                  <Home />
              </Route>
              <Route path='/home'>
                  <Home />
              </Route>
              <Route path='/login'>
                  <Login />
              </Route>
              <Route path='/order'>
                  <Order />
              </Route>
              <Route path='/serviceOrder/:title/:price'>
                  <Order />
              </Route>
              <Route path='/serviceList'>
                  <ServiceList />
              </Route>
              <Route path='/review'>
                  <Review />
              </Route>
              <Route path='/admin'>
                  <User />          
              </Route>
              <Route path='/manageservice'>
                  <ManageService></ManageService>
              </Route>
              <Route path='/manageorder'>
                  <ManageOrder></ManageOrder>
              </Route>
              <Route path='/payment'>
                  <ProcessPayment></ProcessPayment>
              </Route>
              <Route path='/adminService'>
                  <User />
              </Route>
              
              <Route path='/addService'>
                  <AddService />
              </Route>
              
              <Route path='/makeAdmin'>
                  <MAkeAdmin />
              </Route>
              <Route path='*'>
                    <NotFound />
              </Route>
          </Switch>
          
      </Router>
        
    </UserContext.Provider>
  );
}

export default App;

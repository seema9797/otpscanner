import React from 'react';
import './Navbar.css'
import {Container,Form,Button,Input,FormGroup,Label,Col,Row} from 'reactstrap';
import avatar from "../../assets/images/avatar.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar=()=> {
  return (
    <div className="App">
      <div className="header">
        <div className="navbar">
           <div className="logo">
               {/* <img src="" alt="error" /> */}
               <h5>Master Garage</h5>
           </div>
           <div className="menu">
            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/joinus">Join us</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">FAQ's</Link>
          </li>
          <li>
            <Link to="#" className='icons'><i class="fas fa-search"></i></Link>
          </li>
          <li>
            <Link to="#" className="icons"><i class="fas fa-bell"></i></Link>
          </li>
          <li>
            <Link to="#"><img src={avatar} style={{width:"30px"}}/><i class="fas fa-chevron-down"></i></Link>
          </li>
        </ul> 
           </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

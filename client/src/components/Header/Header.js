import React from "react";
import AddUser from '../AddUser/AddUser'
import Email from "../Email/Email";
import './Header.css'


const Header = () => {
  return (
    <nav>
      
      <ul>
      <label className="logo">Rest Api</label>
        <li>
          <a className="active" href="#">Home</a>
        </li>
        <li>
          <a className="active" href="#">About</a>
        </li>
        <li>
          <a className="active" href="#">Contact</a>
        </li>
        <li>
        <AddUser/>
        
        </li>
        <li>
        <Email/>

        </li>
      </ul>
      
    </nav>
 
  );
};

export default Header;

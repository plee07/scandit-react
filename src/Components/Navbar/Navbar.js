import React from 'react';
import './Navbar.css'

const Navbar = (props) => {

    return (
        <nav class="blue lighten-3">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo mynav">Scandit</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li hidden={props.loggedIn}><a href="#">Login</a></li>
              <li hidden={props.loggedIn}><a href="#">Signup</a></li>
              <li hidden={!props.loggedIn}><a href="#">Logout</a></li>
              <li hidden={!props.loggedIn}><a href="#">View Profile</a></li>
            </ul>
          </div>
        </nav>
    );
}

export default Navbar
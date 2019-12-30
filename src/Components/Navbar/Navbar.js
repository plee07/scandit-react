import React from 'react';
import './Navbar.css'

const Navbar = (props) => {

    return (
        <nav class="blue lighten-3">
          <div class="nav-wrapper mynav">
            <a href="#" class="left brand-logo">Scandit</a>
            <ul id="nav-mobile" class="right">
              <li hidden={props.loggedIn}><a href="#">Login</a></li>
              <li hidden={props.loggedIn}><a href="#">Signup</a></li>
              <li hidden={!props.loggedIn}><a href="#">Create Post</a></li>
              <li hidden={!props.loggedIn}><a href="#">View Profile</a></li>
              <li hidden={!props.loggedIn}><a href="#">Logout</a></li>
            </ul>
          </div>
        </nav>
    );
}

export default Navbar


// todos
/*
* the items to the right login/sign don't show up when going to mobile size - fixed, got rid of the hide-on-med-sm class
* can't get this media query to work, for extra small - look into it
*/

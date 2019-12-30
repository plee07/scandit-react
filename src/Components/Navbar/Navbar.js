import React from 'react';
import './Navbar.css'
// eslint-disable-next-line
const Navbar = (props) => {

    return (
        <nav className="blue lighten-3 z-depth-3">
          <div className="nav-wrapper mynav">
            <a href="/" className="left brand-logo">Scandit</a>
            <ul id="nav-mobile" className="right">
              <li hidden={props.loggedIn}><a href="/login">Login</a></li>
              <li hidden={props.loggedIn}><a href="/signup">Signup</a></li>
              <li hidden={!props.loggedIn}><a href="/post">Create Post</a></li>
              <li hidden={!props.loggedIn}><a href="/profile">View Profile</a></li>
              <li hidden={!props.loggedIn}><a href="/">Logout</a></li>
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

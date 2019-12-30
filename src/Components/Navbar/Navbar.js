import React from 'react';
import './Navbar.css'
import Cookies from 'universal-cookie'
// eslint-disable-next-line
const Navbar = (props) => {
    const cookies = new Cookies();

    const logout = () =>{
      console.log('clicked');
      cookies.remove('jwt');
      cookies.remove('user');
    }

    return (
        <nav className="grey lighten-1 z-depth-3">
          <div className="nav-wrapper mynav">
            <a href="/" className="left brand-logo">Scandit</a>
            <ul id="nav-mobile" className="right">
              <li hidden={props.loggedIn}><a href="/login">Login</a></li>
              <li hidden={props.loggedIn}><a href="/signup">Signup</a></li>
              <li hidden={!props.loggedIn}><a href="/post">Create Post</a></li>
              <li hidden={!props.loggedIn}><a href="/profile">View Profile</a></li>
              <li hidden={!props.loggedIn}><a href="/" onClick={logout}>Logout</a></li>
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

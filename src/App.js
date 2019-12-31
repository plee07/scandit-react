import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Posts from './Components/Posts/Posts'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import MakePost from './Components/MakePost/MakePost'
import Comments from './Components/Comments/Comments'
import Cookies from 'universal-cookie'


class App extends Component {
  constructor(props){
    super(props);
    this.cookies = new Cookies();
    this.state = {
      name: this.cookies.get("user") ? this.cookies.get("user") : 'Guest',
      token: this.cookies.get("jwt") ? this.cookies.get("jwt") : null,
      loggedIn: this.cookies.get("jwt") ? true : false
    }
  }
  
  loginHandler = (username, jwt) =>{
    this.setState({name: username, token: jwt, loggedIn: true})
    this.cookies.set("jwt", jwt);
    this.cookies.set("user", username);
  }

  render(){

    return (
      <Router>
        <div className="App">
          <header>
            <Navbar loggedIn={this.state.loggedIn}/>
          </header>
          <Switch>
            <Route path="/" exact 
              render={(props)=> (<Posts {...props} name={this.state.name}/>)} 
            />
             <Route path="/login"
              render={(props) => (<Login {...props} clicked={this.loginHandler}/>)}
            />
             <Route path="/signup"
              render={(props) => (<Signup {...props} clicked={this.loginHandler}/>)}
            />
            <Route path="/post"
              render={(props)=> (<MakePost {...props} clicked={this.postHandler}/>)}
            />
            <Route path="/comments/:id"
              render={(props)=> (<Comments {...props}/>)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

/*
 * look up useState and useEFfect - it mounts the items when we run
 * https://www.youtube.com/watch?v=Law7wfdg_ls
 * Look at hte link above for some idea on how to populate the posts
 * Follow this file structure - https://reactjs.org/docs/faq-structure.html
*/
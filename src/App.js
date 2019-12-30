import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Posts from './Components/Posts/Posts'
import Login from './Components/Login/Login'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Guest",
      token: null,
      loggedIn: false
    }
  }

  testHandler = () =>{
    this.setState({name:"Phil"})
    this.props.history.push('/');
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
              render={(props) => (<Login {...props} clicked={this.testHandler}/>)}
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
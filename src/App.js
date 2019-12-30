import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import Navbar from './Components/Navbar/Navbar'
import Post from './Components/Post/Post'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Guest",
      token: null,
      loggedIn: true
    }
  }

  render(){

    return (
      <div className="App">
        <header>
          <Navbar loggedIn={this.state.loggedIn}/>
        </header>
        <body>
          <Post />
          <Post />
        </body>
      </div>
    );
  }
}

export default App;

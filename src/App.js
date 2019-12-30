import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import 'materialize-css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Guest",
      token: null,
      loggedIn: false
    }
  }

  render(){

    return (
      <div className="App">
        <header>
          <Navbar loggedIn={this.state.loggedIn}/>
        </header>
        <body>
  
        </body>
      </div>
    );
  }
}

export default App;

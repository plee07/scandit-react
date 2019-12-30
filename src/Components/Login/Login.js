import React from 'react';
import './Login.css'
import {withRouter} from 'react-router-dom';

class Login extends React.Component {

  constructor(props){
      super(props);
  }

  render() {
      return (
      <div>
          <h4 className="center-align">Login</h4>
      <div className="row mylogin">
        <form className="col s12">
        <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" name="email"/>
          <label for="email">Email</label>
        </div>
        <div className="input-field col s12">
          <input id="password" type="password" clasNames="validate" name="password" />
          <label for="password">Password</label>
        </div>
        </div>
        <div className="center-align">
          <button className="waves-effect waves-light btn-large" onSubmit={this.props.clicked}>Login</button>
        </div>
        </form>
      </div>        
      </div>
      )
  };
};

export default withRouter(Login);
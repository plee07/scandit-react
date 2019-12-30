import React from 'react';
import './Signup.css'

class Signup extends React.Component {

  constructor(props){
    super(props);
  }
  
  submitForm(e){
    //logic here to see if we got back a jwt
    alert(e.target.user.value + " " + e.target.password.value)
    let auth = true;
    if(auth){
        this.props.history.push('/')
        this.props.clicked(e.target.user.value, "123");
    }
  }

  render() {

    return (
    <div>
      <h4 className="center-align">Sign up</h4>
    <div className="row mylogin">
    <form className="col s12" onSubmit={this.submitForm.bind(this)} >
    <div className="row">
    <div className="input-field col s12">
      <input id="email" type="email" className="validate" name="email"/>
      <label htmlFor="email">Email</label>
    </div>
    <div className="input-field col s12">
      <input id="user" type="text" className="validate" name="user"/>
      <label htmlFor="user">Username</label>
    </div>
    <div className="input-field col s12">
      <input id="password" type="password" className="validate" name="password" />
      <label htmlFor="password">Password</label>
    </div>
    </div>
    <div className="center-align">
      <button className="grey lighten-1 waves-effect waves-light btn-large">Sign Up</button>
    </div>
    </form>
    </div>        
    </div>
    )
  };
};

export default Signup;
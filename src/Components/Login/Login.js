import React from 'react';
import './Login.css'
import UserApi from '../../Api/userApi'
import Jwt from 'jsonwebtoken'

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      errorMessage: false,
      message: ""
    }
  }
  
  submitForm(e){
    e.preventDefault();
    UserApi.login(e.target.user.value, e.target.password.value)
    .then((data)=>{
      if(data.token){
        this.setState({
          errorMessage: false,
          message: ""
        })
        this.props.clicked(Jwt.decode(data.token).sub,data.token);
        this.props.history.push('/');
      }
      else if(data.message){
        this.setState({
          errorMessage: true,
          message: data.message
        })
      }
    }).catch((err)=>{
      console.log("error:",err);
    })
  }

  render() {

    return (
    <div>
      <h4 className="center-align">Login</h4>
    <div className="row mylogin">
    <form className="col s12" onSubmit={this.submitForm.bind(this)} >
    <div className="row">
    <div className="input-field col s12">
      <input id="user" type="text" className="validate" name="user"/>
      <label htmlFor="user">Username/Email</label>
    </div>
    <div className="input-field col s12">
      <input id="password" type="password" className="validate" name="password" />
      <label htmlFor="password">Password</label>
    </div>
    <p hidden={!this.state.errorMessage}className="center-align">{this.state.message}</p>
    </div>
    <div className="center-align">
      <button className="grey lighten-1 waves-effect waves-light btn-large">Login</button>
    </div>
    </form>
    </div>        
    </div>
    )
  };
};

export default Login;
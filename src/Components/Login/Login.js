import React from 'react';
import './Login.css'
import UserApi from '../../Api/userApi'

class Login extends React.Component {

  constructor(props){
    super(props);
  }
  
  submitForm(e){
    //logic here to see if we got back a jwt
    e.preventDefault();
    // const data = UserApi.login(e.target.user.value, e.target.password.value)
    //   .then(data=> data)
    //   .error(err => err);
    // // alert(data.token);
    UserApi.login(e.target.user.value, e.target.password.value)
    // console.log(data);
    // let auth = true;
    // if(auth){
    //     this.props.history.push('/')
    //     this.props.clicked(e.target.user.value, "123");
    // }
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
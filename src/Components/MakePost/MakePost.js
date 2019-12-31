import React from 'react';
import './MakePost.css';
import PostApi from '../../Api/postApi'
import Cookies from 'universal-cookie'
class MakePost extends React.Component {
    constructor(props){
        super(props);
        this.cookies = new Cookies();
        this.state = {
            errorMessage: false,
            message: ""
        }
    }

    submitForm(e){
        e.preventDefault();
        PostApi.makePost(e.target.title.value, e.target.description.value, this.cookies.get("jwt"))
        .then((data)=>{
          if(data.postId){
            this.setState({
              errorMessage: false,
              message: ""
            })
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
            <h4 className="center-align">Create Post</h4>
            <div className="row myPost">
            <form className="col s12" onSubmit={this.submitForm.bind(this)}>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="title" className="materialize-textarea"></textarea>
                  <label htmlFor="title">Title</label>
                </div>
                <div className="input-field col s12">
                  <textarea id="description" className="materialize-textarea"></textarea>
                  <label htmlFor="description">Description</label>
                </div>
              </div>
              <div className="center-align">
                <button className="grey lighten-1 waves-effect waves-light btn-large">Create Post</button>
              </div>
            </form>
          </div>
        </div>
        )
    }
}

export default MakePost;
import React from 'react';
import Cookies from 'universal-cookie'
import CommentApi from '../../../Api/commentApi'

class AddComment extends React.Component {
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
        CommentApi.postComment(this.props.postId, e.target.comment.value, this.cookies.get("jwt"))
        .then((data)=>{
          console.log(data);
          if(data.commentId){
            this.setState({
              errorMessage: false,
              message: ""
            })
            console.log("reached here?")
            // this.props.history.push(`/comments/${this.props.postId}`);
            document.location.reload() // iffy about this one, lets see if theres another way
          }
          else if(!data.postId && data.title){
            this.setState({
              errorMessage: true,
              message: data.title
            })
          }
        }).catch((err)=>{
          console.log("error:",err);
        })
      }
    render() {
        return (
            <div className="row">
            <form className="col s12" onSubmit={this.submitForm.bind(this)}>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="comment" className="materialize-textarea"></textarea>
                  <label htmlFor="comment">Add Comment</label>
                </div>
                <div className="center-align">
                <button className="grey lighten-1 waves-effect waves-light btn-large">Add Comment</button>
              </div>
              </div>
            </form>
          </div>
                
        )
    }
}

export default AddComment;
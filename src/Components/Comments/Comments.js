import React from 'react';
import './Comments.css';
import Comment from '../Comment/Comment'
import CommentApi from '../../Api/commentApi'
import AddComment from './AddComment/AddComment'

class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = ({
            comments: [],
            post: this.props.location.state
        })
    }

    componentDidMount(){
        CommentApi.getComments(this.props.match.params.id).then(res=> this.setState({comments: res.reverse()}));
    }
    
    render(){
        return (
            <div className="myComments">
                <div className="row">
                    <div className="col-12">
                         <div className="card-panel grey lighten-2">
                            <p><b>Original Post</b></p>
                            <p><b>{this.state.post[0].user.username}: {this.state.post[0].title}</b></p><br></br>
                            <p>{this.state.post[0].description}</p>
                        </div>
                    </div>
                </div>  
                <AddComment postId={this.props.match.params.id}/>
                {this.state.comments.map((comment, index)=>{
                    return <Comment commentId={comment.commentId} 
                    username={comment.user.username} 
                    postId={this.props.match.params.id}
                    text={comment.text} key={index} />
                })}
            </div>
        )

    }
}

export default Comments;


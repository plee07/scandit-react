import React from 'react';
import Post from '../Post/Post'
import './Comments.css';
import Comment from '../Comment/Comment'
import CommentApi from '../../Api/commentApi'

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
        console.log(this.state.post)
    }
    
    render(){
        return (
            <div className="myComments">
                <div className="row">
                    <div className="col-12">
                         <div className="card-panel brown lighten-5">
                            <p><b>Original Post</b></p>
                            <p><b>{this.state.post[0].user.username}: {this.state.post[0].title}</b></p><br></br>
                            <p>{this.state.post[0].description}</p>
                        </div>
                    </div>
                </div>  

                {this.state.comments.map((comment, index)=>{
                    return <Comment username={comment.user.username} text={comment.text} key={index} />
                })}
            </div>
        )

    }
}

export default Comments;


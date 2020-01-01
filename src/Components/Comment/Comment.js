import React from 'react';
import './Comment.css';
import Cookies from 'universal-cookie';
import CommentApi from '../../Api/commentApi'

const Comment = (props) => {
    const cookie = new Cookies();
    const page = `/comment/${props.postId}`
    return (
        <div className="card grey lighten-3">
            <div className="card-content ">
                <p>{props.username}: {props.text}</p>
            </div>
            <div className="card-tabs">
                <div hidden={!(props.username === cookie.get('user'))} 
                onClick={()=> CommentApi.deleteComment(props.commentId, cookie.get('jwt'))}>
                    <ul className="tabs tabs-fixed-width deep-orange lighten-4">
                        <li className="tab"><a className="active">Delete Comment</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Comment;
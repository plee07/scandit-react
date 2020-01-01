import React from 'react';
import './Post.css'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Post = (props) => {
    return (
        <div className="card myPost grey lighten-3">
        <div className="card-content ">
          <p><b>{props.post.user.username}: {props.post.title}</b></p><br></br>
          <p>{props.post.description}</p>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width grey lighten-2">

            {/* <li className="tab"><a className="active" href={`comments/${props.post.postId}`}>View Comments</a></li> */}
            <li className="tab"><Link className="active" to={{
            pathname: `comments/${props.post.postId}`,
            state: [props.post]
            }}> View Comments </Link></li>
            <li className="tab"><a className="active" href="/">Delete Post</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Post;
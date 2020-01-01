import React from 'react';
import './Post.css'
import PostApi from '../../Api/postApi'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import Cookies from 'universal-cookie'

const Post = (props) => {  
    const cookies = new Cookies();
    return (
        <div className="card myPost grey lighten-3">
        <div className="card-content ">
          <p><b>{props.post.user.username}: {props.post.title}</b></p><br></br>
          <p>{props.post.description}</p>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width grey lighten-2">
            <li className="tab"><Link className="active" to={{
            pathname: `comments/${props.post.postId}`,
            state: [props.post]
            }}> View Comments </Link></li>
          </ul>
          <div hidden={!props.sameUser} onClick={()=> PostApi.deletePost(props.post.postId, cookies.get('jwt'))}>
          <ul hidden className="tabs tabs-fixed-width deep-orange lighten-4">
            <li className="tab"><a className="active" href="/">Delete Post</a></li>
          </ul>
          </div>
        </div>
      </div>
    )
}

export default Post;
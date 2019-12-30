import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        <div className="card myPost">
        <div className="card-content">
          <p>Guest:</p>
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab"><a class="active" href="/">View Comments</a></li>
            <li className="tab"><a class="active" href="/">Delete Post</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Post;
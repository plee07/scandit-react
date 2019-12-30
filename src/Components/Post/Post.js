import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        <div className="card myPost grey lighten-3">
        <div className="card-content ">
          <p><b>Guest:</b></p><br></br>
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
          </p>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width grey lighten-2">
            <li className="tab"><a className="active" href="/">View Comments</a></li>
            <li className="tab"><a className="active" href="/">Delete Post</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Post;
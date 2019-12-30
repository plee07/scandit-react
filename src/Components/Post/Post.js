import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        //tests
        <div class="card myPost">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-tabs">
          <ul class="tabs tabs-fixed-width">
            <li class="tab"><a class="active" href="#">View Comments</a></li>
            <li class="tab"><a class="active" href="#test6">Delete Post</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Post;
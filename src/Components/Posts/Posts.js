import React from 'react';
import Post from '../Post/Post'

const Posts = (props) => {
    return (
        <div>
            <h4 className="center-align">Welcome {props.name}</h4>
            <Post />
            <Post />
        </div>
    )
}

export default Posts;
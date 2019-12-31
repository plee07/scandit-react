import React from 'react';
import './Comment.css';

const Comment = (props) => {
    return (
    <div className="row">
        <div className="col-12">
            <div className="card-panel brown lighten-5">
                <span>
                    {props.username}: {props.text}
                </span>
            </div>
        </div>
    </div>
    )
}

export default Comment;
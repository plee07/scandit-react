import React from 'react';
import Post from '../Post/Post'
import PostApi from '../../Api/postApi'
import { render } from '@testing-library/react';

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            posts: []
        })
    }

    componentDidMount(){
        PostApi.getPosts().then(res => this.setState({posts: res}));

    }
    render(){
        return (
            <div>
                <h4 className="center-align">Welcome {this.props.name}</h4>
                {/* <Post /> */}
                {this.state.posts.map((post, index)=>{
                    return <Post post={post}/>
                })}
                
            </div>
        )
    }
}

export default Posts;
import React from 'react';
import Post from '../Post/Post'
import PostApi from '../../Api/postApi'
import Cookies from 'universal-cookie'

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.cookies = new Cookies();
        this.state = ({
            posts: []
        })
    }

    componentDidMount(){
        PostApi.getPosts().then(res => this.setState({posts: res.reverse()}));

    }
    render(){
        return (
            <div>
                <h4 className="center-align">Welcome {this.props.name}</h4>
                {/* <Post /> */}
                {this.state.posts.map((post, index)=>{
                    const sameUser = this.cookies.get("user") === post.user.username;
                    return <Post post={post} key={index} sameUser={sameUser}/>
                })}
                
            </div>
        )
    }
}

export default Posts;
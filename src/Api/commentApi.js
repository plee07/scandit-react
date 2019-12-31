const API_ENDPOINT_BASE = 'http://localhost:8080/comments'

async function getComments(postId){
    const url = `/post/${postId}/comment`;
    const res = await fetch(API_ENDPOINT_BASE + url);
    const data = await res.json();
    console.log(data);
    return data;
}

module.exports = {
    getComments
}
// localhost:8080/comments/post/3/comment
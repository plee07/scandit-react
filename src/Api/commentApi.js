const API_ENDPOINT_BASE = 'http://localhost:8080/comments'

async function getComments(postId){
    const url = `/post/${postId}/comment`;
    const res = await fetch(API_ENDPOINT_BASE + url);
    const data = await res.json();
    return data;
}

async function postComment(postId, text, auth){
    const url = `/post/${postId}`;
    
    const comment = { text: text };
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${auth}`
        },
        body: JSON.stringify(comment)
    }

    const response = await fetch(API_ENDPOINT_BASE + url,options);
    const data = await response.json();
    return data;
}


module.exports = {
    getComments, postComment
}
// localhost:8080/comments/post/3/comment
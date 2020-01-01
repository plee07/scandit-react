const API_ENDPOINT_BASE = 'http://localhost:8080/comments'

async function getComments(postId){
    const url = `/post/${postId}/comment`;
    const res = await fetch(API_ENDPOINT_BASE + url);
    const data = await res.json();
    return data;
}

async function postComment(postId, text, auth, notifyOP){
    const url = `/post/${postId}`;
    
    const comment = { text: text, notifyOP: notifyOP};
    console.log(comment);
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

async function deleteComment(commentId, auth){
    const url = `/${commentId}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${auth}`
        }
    }
    const response = await fetch(API_ENDPOINT_BASE + url, options);
    const data = await response.json();
    console.log(data);
    document.location.reload()
    return data;
}


module.exports = {
    getComments, postComment, deleteComment
}
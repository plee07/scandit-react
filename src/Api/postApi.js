const API_ENDPOINT_BASE = 'http://localhost:8080/posts'

async function getPosts(){
    const res = await fetch(API_ENDPOINT_BASE + "/list")
    const data = await res.json();
    return data;
}

async function makePost(title, description, auth){
    const post = {
        title: title,
        description: description
    };

    console.log(post);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${auth}`
        },
        body: JSON.stringify(post)
    }
    const response = await fetch(API_ENDPOINT_BASE + "/post", options)
    return await response.json();
}

async function deletePost(postId, auth){
    const url = `/${postId}`;
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
    return data;
}

module.exports = {
    getPosts, makePost, deletePost
}

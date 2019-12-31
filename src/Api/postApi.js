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

module.exports = {
    getPosts, makePost
}

const API_ENDPOINT_BASE = 'http://localhost:8080/posts'

async function getPosts(){
    const res = await fetch(API_ENDPOINT_BASE + "/list")
    const data = await res.json();
    return data;
}

module.exports = {
    getPosts
}
const API_ENDPOINT_BASE = 'http://192.168.99.100:8081'

async function login(user, password) {
    const logUser = {
        username: user,
        password: password
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        // mode: 'no-cors',
        body: JSON.stringify(logUser)
    }
    const response = await fetch(API_ENDPOINT_BASE + "/login", options);
    console.log(response)
}

module.exports = {
    login: login
}
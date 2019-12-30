const API_ENDPOINT_BASE = 'http://localhost:8080/users'

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
        body: JSON.stringify(logUser)
    }
    const response = await fetch(API_ENDPOINT_BASE + "/login", options);
    return await response.json();
}

async function signup(user, email, password) {
    const newUser = {
        username: user,
        email: email,
        password: password
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newUser)
    }
    const response = await fetch(API_ENDPOINT_BASE + "/signup", options);
    return await response.json();
}

module.exports = {
    login,
    signup
}
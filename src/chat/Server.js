const BASIC_URL = `http://${window.location.host}`;
// const BASIC_URL = 'http://localhost:7000';

async function smartFetch(url, params) {
    let response = await fetch(url, params);
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(await response.json());
    }
}

class ServerClass {
    users = {};
    constructor() {
        this.getUserById = this.getUserById.bind(this);
        this.loadUserInfo = this.loadUserInfo.bind(this);
        this.loadMessages = this.loadMessages.bind(this);
        this.getUserIdByName = this.getUserIdByName.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    async getUserById(userId) {
        if (!this.users.hasOwnProperty(userId)) {
            this.users[userId] = this.loadUserInfo(userId)
        }
        return this.users[userId];
    }

    async loadUserInfo(userId) {
        let response = await fetch(`${BASIC_URL}/user/${userId}`);
        return response.json();
    }

    async loadMessages() {
        let promise = await fetch(`${BASIC_URL}/messages`);
        return promise.json();
    }

    async getUserIdByName(username) {
        return smartFetch(`${BASIC_URL}/users/getUserIdByName`, {
            method: 'POST',
            body: username,
        }).then(parseInt);
    }

    async addUser(user) {
        return smartFetch(`${BASIC_URL}/user`, {
            method: 'PUT',
            body: JSON.stringify(user),
        }).then(parseInt);
    }

    addMessage(userId, text) {
        return smartFetch(`${BASIC_URL}/message`, {
            method: 'PUT',
            body: JSON.stringify({userId, text}),
        }).then(parseInt);
    }
}

let Server = new ServerClass();

export default Server;